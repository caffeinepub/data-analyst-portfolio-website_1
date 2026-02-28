import Map "mo:core/Map";
import Iter "mo:core/Iter";
import Order "mo:core/Order";
import Runtime "mo:core/Runtime";
import MixinStorage "blob-storage/Mixin";

actor {
  include MixinStorage();

  type ContactMessage = {
    id : Nat;
    name : Text;
    email : Text;
    subject : Text;
    message : Text;
  };

  module ContactMessage {
    public func compare(msg1 : ContactMessage, msg2 : ContactMessage) : Order.Order {
      Nat.compare(msg1.id, msg2.id);
    };
  };

  var messageIdCounter = 0;

  let contactMessageMap = Map.empty<Nat, ContactMessage>();

  public shared ({ caller }) func submitContactMessage(name : Text, email : Text, subject : Text, message : Text) : async () {
    let newMessage : ContactMessage = {
      id = messageIdCounter;
      name;
      email;
      subject;
      message;
    };
    contactMessageMap.add(messageIdCounter, newMessage);
    messageIdCounter += 1;
  };

  public query ({ caller }) func getAllContactMessages() : async [ContactMessage] {
    contactMessageMap.values().toArray().sort();
  };

  public query ({ caller }) func getContactMessage(id : Nat) : async ContactMessage {
    switch (contactMessageMap.get(id)) {
      case (null) { Runtime.trap("Message does not exist") };
      case (?message) { message };
    };
  };
};
