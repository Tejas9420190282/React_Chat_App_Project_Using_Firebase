import React from "react";
import "./Details.css";
import { auth, db } from "../../lib/firebase";
import { useChatStore } from "../../lib/chatStore";
import { useUserStore } from "../../lib/userStore";
import { arrayRemove, doc, updateDoc } from "firebase/firestore";

function Details() {
  const { changeBlock, chatId, user, isCurrentUserBlocked, isReceiverBlocked } =
    useChatStore();
  const { currentUser } = useUserStore();

  const handleBlock = async () => {
    if (!user) return;

    const userDocRef = doc(db, "users", currentUser.id);

    try {
      await updateDoc(userDocRef, {
        blocked: isReceiverBlocked
          ? arrayRemove(user.id)
          : arrayRemove(user.id),
      });

      changeBlock();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="detail">
        <div className="user">
          <img src={user?.avatar || "./avatar.png"} alt="" />
          <h2>{user?.username}</h2>
          <p>afs wdwe efwe ewr3 </p>
        </div>
        <div className="info">
          <div className="option">
            <div className="title">
              <span>Chat Setting</span>
              <img src="./arrowUp.png" alt="" />
            </div>
          </div>
          <div className="option">
            <div className="title">
              <span>Privacy & help</span>
              <img src="./arrowUp.png" alt="" />
            </div>
          </div>
          <div className="option">
            <div className="title">
              <span>Shaired photos</span>
              <img src="./arrowDown.png" alt="" />
            </div>
            <div className="photos">
              <div className="photoItem">
                <div className="photoDetail">
                  <img
                    src="https://wallpaperaccess.com/full/1869057.jpg"
                    alt=""
                  />
                  <span>Photo_2024_2.png</span>
                </div>
                <img src="./download.png" className="icon" />
              </div>
              <div className="photoItem">
                <div className="photoDetail">
                  <img
                    src="https://wallpaperaccess.com/full/1869057.jpg"
                    alt=""
                  />
                  <span>Photo_2024_2.png</span>
                </div>
                <img src="./download.png" className="icon" />
              </div>
              <div className="photoItem">
                <div className="photoDetail">
                  <img
                    src="https://wallpaperaccess.com/full/1869057.jpg"
                    alt=""
                  />
                  <span>Photo_2024_2.png</span>
                </div>
                <img src="./download.png" className="icon" />
              </div>
              <div className="photoItem">
                <div className="photoDetail">
                  <img
                    src="https://wallpaperaccess.com/full/1869057.jpg"
                    alt=""
                  />
                  <span>Photo_2024_2.png</span>
                </div>
                <img src="./download.png" className="icon" />
              </div>
            </div>
          </div>
          <div className="option">
            <div className="title">
              <span>Shaired files</span>
              <img src="./arrowUp.png" alt="" />
            </div>
          </div>
          <button onClick={handleBlock}>
            {isCurrentUserBlocked
              ? "You are block"
              : isReceiverBlocked
              ? "User Blocked"
              : "Block user"}
          </button>
          <button className="logout" onClick={() => auth.signOut()}>
            Logout
          </button>
        </div>
      </div>
    </>
  );
}

export default Details;
