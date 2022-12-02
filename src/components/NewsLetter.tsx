import { useRef, useState } from "react";
import styled from "styled-components";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";
import Separator from "src/styles/Separator";
import { botderGradient } from "src/styles/global-styles";

const SubscribeSection = styled.section`
    padding: 6rem 0 2rem 0;

    .user-subscribe-section {
        background: var(--color-primary-600);
        border-radius: 5px;
        padding: 3rem;
        ${botderGradient}
    }

    form {
        position: relative;
        margin-top: 2rem;
        padding-bottom: 1rem;
    }

    .member-submit {
        position: absolute;
        right: 15px;
        top: 10%;
    }
    .subscribe-title {
        margin-top: 0;
        font-size: 2.2rem;
    }

    .message {
        display: flex;
        align-items: center;
        font-size: 1.6rem;
        span:last-child {
            margin-left: 10px;
        }
    }

    @media ${props => props.theme.breakpoints.mobile} {
        .member-submit {
            width: 100%;
            position: initial;
            margin-top: 1.5rem;
        }
    }
`;

const SubscribeToNewsLetter = () => {
    const inputRef = useRef(null);

    const [responseText, setResponseText] = useState("");
    const [responseStatus, setResponseStatus] = useState<number>();

    const subscribeUser = async e => {
        e.preventDefault();

        const request = await fetch("/api/subscribe", {
            body: JSON.stringify({
                email: inputRef.current.value
            }),
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST"
        });
        const response = await request.json();
        setResponseText(response.text);
        setResponseStatus(request.status);
    };

    return (
        <>
            <Separator />
            <SubscribeSection>
                <div className="user-subscribe-section">
                    <p className="subscribe-title">Subscribe to my newsletter</p>
                    <p>Get notifications about new personal development and SaaS blog posts.</p>
                    <form
                        action="https://www.getrevue.co/profile/victorysokolov/add_subscriber"
                        method="post"
                        name="revue-form"
                        target="_blank"
                        onSubmit={subscribeUser}
                    >
                        <input
                            className="revue-form-field"
                            placeholder="Your email address..."
                            type="email"
                            name="member[email]"
                            id="member_email"
                            required
                            ref={inputRef}
                        />

                        <button type="submit" name="member[subscribe]" className="member-submit">
                            Subscribe
                        </button>
                    </form>
                    <a href="https://www.getrevue.co/profile/victorysokolov" target="_blank" rel="noopener noreferrer">
                        View all issues
                    </a>
                    {responseText && (
                        <p className="message">
                            {responseStatus === 201 ? (
                                <AiFillCheckCircle color="aquamarine" />
                            ) : (
                                <AiFillCloseCircle color="tomato" />
                            )}
                            <span style={responseStatus === 201 ? { color: "aquamarine" } : { color: "tomato" }}>
                                {responseText}
                            </span>
                        </p>
                    )}
                </div>
            </SubscribeSection>
        </>
    );
};

export default SubscribeToNewsLetter;
