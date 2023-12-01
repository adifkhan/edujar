import React from "react";
import style from "../../styles/subscription.module.css";

const Subscription = () => {
  return (
    <section className={style.subscription_wrapper}>
      <div className={style.subs_text}>
        <div className="heading">
          <h2>
            Join our <span> world's largest </span>
            learning platform today
          </h2>
        </div>
        <p>Start learning by registering and get 30 days free trail</p>
      </div>
      <div className={style.subscription_btn}>
        <button>Join as Instructor</button>
        <button>Join as Student</button>
      </div>
    </section>
  );
};

export default Subscription;
