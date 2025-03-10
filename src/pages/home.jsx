import React, { useRef } from "react";
import { db } from "../firebase"; // Ispravan import Firestore instance
import { addDoc, collection } from "@firebase/firestore";

export default function Home() {
  const messageRef = useRef();
  const ref = collection(db, "messages"); // Koristi db instancu za Firestore

  const handleSave = async (e) => {
    e.preventDefault();
    console.log(messageRef.current.value);

    let data = {
      message: messageRef.current.value,
    };

    try {
      await addDoc(ref, data);
      console.log("Message saved successfully");
    } catch (err) {
      console.error("Error saving message: ", err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSave}>
        <label>Enter Messasdasdasage:</label>
        <input type="text" ref={messageRef} required />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}