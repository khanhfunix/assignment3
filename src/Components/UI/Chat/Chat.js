import classes from "./Chat.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperclip,
  faPaperPlane,
  faFaceSmile,
} from "@fortawesome/free-solid-svg-icons";
import useInput from "../../../hook/use-input";

function Chat() {
  // component hien thi cua so chat
  // lay tin nhan nguoi dung tu local storage de render
  const userMessage = localStorage.getItem("user-message")
    ? JSON.parse(localStorage.getItem("user-message"))
    : [];
  // dung custom hook use-input
  const {
    value: enteredMessage,
    isValid: messageIsValid,
    valueChangeHandler: messageChangeHandler,
    reset: resetmessageInput,
  } = useInput((value) => value !== "");
  // logice khi nguoi dung chat
  const submitMessageHander = (e) => {
    e.preventDefault();
    if (!messageIsValid) {
      return;
    }
    userMessage.push(enteredMessage);
    localStorage.setItem("user-message", JSON.stringify(userMessage));
    resetmessageInput();
  };
  return (
    <>
      <div className={classes.chatHeader}>
        <h4>Customer Support</h4>
        <h5> Lets chat app</h5>
      </div>
      <div className={classes.chatContent}>
        {userMessage.map((e) => {
          return <p key={e}>{e}</p>;
        })}
      </div>
      <div className={classes.chatInput}>
        <form onClick={submitMessageHander} className={classes.formChat}>
          <img
            src="https://visualpharm.com/assets/381/Admin-595b40b65ba036ed117d3b23.svg"
            alt="img-admin"
          ></img>
          <input
            id="message"
            placeholder="Enter Message"
            type="text"
            value={enteredMessage}
            onChange={messageChangeHandler}
          ></input>
          <div>
            <FontAwesomeIcon icon={faPaperclip} className={classes.icon} />
            <FontAwesomeIcon icon={faFaceSmile} className={classes.icon} />
          </div>
          <button type="submit">
            <FontAwesomeIcon icon={faPaperPlane} />
          </button>
        </form>
      </div>
    </>
  );
}

export default Chat;
