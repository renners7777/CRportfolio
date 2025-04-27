import React from 'react';
import '../styles/css/PrivacyPolicyModal.css'; // We'll create this CSS file next

const PrivacyPolicyModal = ({ isOpen, onClose }) => {
    if (!isOpen) {
        return null; // Don't render anything if the modal is closed
    }

    // Prevent clicks inside the modal from closing it
    const handleContentClick = (e) => {
        e.stopPropagation();
    };

    return (
        // The overlay div covers the screen and closes the modal when clicked
        <div className="modal-overlay" onClick={onClose}>
            {/* The content div holds the actual modal content */}
            <div className="modal-content" onClick={handleContentClick}>
                {/* Close button */}
                <button className="modal-close-button" onClick={onClose}>
                    &times; {/* Simple 'X' character */}
                </button>

                <h2>Privacy Policy</h2>
                <div>
                    <style
                        dangerouslySetInnerHTML={{
                            __html:
                                "  [data-custom-class='body'], [data-custom-class='body'] * {          background: transparent !important;        }" +
                                "[data-custom-class='title'], [data-custom-class='title'] * {          font-family: Arial !important;font-size: 26px !important;color: #000000 !important;        }" +
                                "[data-custom-class='subtitle'], [data-custom-class='subtitle'] * {          font-family: Arial !important;color: #595959 !important;font-size: 14px !important;        }" +
                                "[data-custom-class='heading_1'], [data-custom-class='heading_1'] * {          font-family: Arial !important;font-size: 19px !important;color: #000000 !important;        }" +
                                "[data-custom-class='heading_2'], [data-custom-class='heading_2'] * {          font-family: Arial !important;font-size: 17px !important;color: #000000 !important;        }" +
                                "[data-custom-class='body_text'], [data-custom-class='body_text'] * {          color: #595959 !important;font-size: 14px !important;font-family: Arial !important;        }" +
                                /* === Updated Link Styles === */
                                "[data-custom-class='link'], [data-custom-class='link'] * {          color: #0056b3 !important; /* Darker blue */ font-size: 14px !important; font-family: Arial !important; word-break: break-word !important; font-weight: bold !important; /* Make bold */ text-decoration: underline !important; /* Add underline */ transition: color 0.2s ease; }" +
                                /* === Add Hover Effect === */
                                "[data-custom-class='link']:hover, [data-custom-class='link']:hover * {          color: #003d80 !important; /* Even darker blue on hover */ text-decoration: none !important; /* Optional: remove underline on hover */ }"
                        }}
                    />
                    <span
                        style={{
                            background:
                                "url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNzgiIGhlaWdodD0iMzgiIHZpZXdCb3g9IjAgMCAxNzggMzgiPgogICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8cGF0aCBmaWxsPSIjRDFEMUQxIiBkPSJNNC4yODMgMjQuMTA3Yy0uNzA1IDAtMS4yNTgtLjI1Ni0xLjY2LS43NjhoLS4wODVjLjA1Ny41MDIuMDg2Ljc5Mi4wODYuODd2Mi40MzRILjk4NXYtOC42NDhoMS4zMzJsLjIzMS43NzloLjA3NmMuMzgzLS41OTQuOTUtLjg5MiAxLjcwMi0uODkyLjcxIDAgMS4yNjQuMjc0IDEuNjY1LjgyMi40MDEuNTQ4LjYwMiAxLjMwOS42MDIgMi4yODMgMCAuNjQtLjA5NCAxLjE5OC0uMjgyIDEuNjctLjE4OC40NzMtLjQ1Ni44MzMtLjgwMyAxLjA4LS4zNDcuMjQ3LS43NTYuMzctMS4yMjUuMzd6TTMuOCAxOS4xOTNjLS40MDUgMC0uNy4xMjQtLjg4Ni4zNzMtLjE4Ny4yNDktLjI4My42Ni0uMjkgMS4yMzN2LjE3N2MwIC42NDUuMDk1IDEuMTA3LjI4NyAxLjM4Ni4xOTIuMjguNDk1LjQxOS45MS40MTkuNzM0IDAgMS4xMDEtLjYwNSAxLjEwMS0xLjgxNiAwLS41OS0uMDktMS4wMzQtLjI3LTEuMzI5LS4xODItLjI5NS0uNDY1LS40NDMtLjg1Mi0uNDQzem01LjU3IDEuNzk0YzAgLjU5NC4wOTggMS4wNDQuMjkzIDEuMzQ4LjE5Ni4zMDQuNTEzLjQ1Ny45NTQuNDU3LjQzNyAwIC43NS0uMTUyLjk0Mi0uNDU0LjE5Mi0uMzAzLjI4OC0uNzUzLjI4OC0xLjM1MSAwLS41OTUtLjA5Ny0xLjA0LS4yOS0xLjMzOC0uMTk0LS4yOTctLjUxLS40NDUtLjk1LS40NDUtLjQzOCAwLS43NTMuMTQ3LS45NDYuNDQzLS4xOTQuMjk1LS4yOS43NDItLjI5IDEuMzR6bTQuMTUzIDBjMCAuOTc3LS4yNTggMS43NDItLjc3NCAyLjI5My0uNTE1LjU1Mi0xLjIzMy44MjctMi4xNTQuODI3LS41NzYgMC0xLjA4NS0uMTI2LTEuNTI1LS4zNzhhMi41MiAyLjUyIDAgMCAxLTEuMDE1LTEuMDg4Yy0uMjM3LS40NzMtLjM1NS0xLjAyNC0uMzU1LTEuNjU0IDAtLjk4MS4yNTYtMS43NDQuNzY4LTIuMjg4LjUxMi0uNTQ1IDEuMjMyLS44MTcgMi4xNi0uODE3LjU3NiAwIDEuMDg1LjEyNiAxLjUyNS4zNzYuNDQuMjUxLjc3OS42MSAxLjAxNSAxLjA4LjIzNi40NjkuMzU1IDEuMDE5LjM1NSAxLjY0OXpNMTkuNzEgMjRsLS40NjItMi4xLS42MjMtMi42NTNoLS4wMzdMMTcuNDkzIDI0SDE1LjczbC0xLjcwOC02LjAwNWgxLjYzM2wuNjkzIDIuNjU5Yy4xMS40NzYuMjI0IDEuMTMzLjMzOCAxLjk3MWguMDMyYy4wMTUtLjI3Mi4wNzctLjcwNC4xODgtMS4yOTRsLjA4Ni0uNDU3Ljc0Mi0yLjg3OWgxLjgwNGwuNzA0IDIuODc5Yy4wMTQuMDc5LjAzNy4xOTUuMDY3LjM1YTIwLjk5OCAyMC45OTggMCAwIDEgLjE2NyAxLjAwMmMuMDIzLjE2NS4wMzYuMjk5LjA0LjM5OWguMDMyYy4wMzItLjI1OC4wOS0uNjExLjE3Mi0xLjA2LjA4Mi0uNDUuMTQxLS43NTQuMTc3LS45MTFsLjcyLTIuNjU5aDEuNjA2TDIxLjQ5NCAyNGgtMS43ODN6bTcuMDg2LTQuOTUyYy0uMzQ4IDAtLjYyLjExLS44MTcuMzMtLjE5Ny4yMi0uMzEuNTMzLS4zMzguOTM3aDIuMjk5Yy0uMDA4LS40MDQtLjExMy0uNzE3LS4zMTctLjkzNy0uMjA0LS4yMi0uNDgtLjMzLS44MjctLjMzem0uMjMgNS4wNmMtLjk2NiAwLTEuNzIyLS4yNjctMi4yNjYtLjgtLjU0NC0uNTM0LS44MTYtMS4yOS0uODE2LTIuMjY3IDAtMS4wMDcuMjUxLTEuNzg1Ljc1NC0yLjMzNC41MDMtLjU1IDEuMTk5LS44MjUgMi4wODctLjgyNS44NDggMCAxLjUxLjI0MiAxLjk4Mi43MjUuNDcyLjQ4NC43MDkgMS4xNTIuNzA5IDIuMDA0di43OTVoLTMuODczYy4wMTguNDY1LjE1Ni44MjkuNDE0IDEuMDkuMjU4LjI2MS42Mi4zOTIgMS4wODUuMzkyLjM2MSAwIC43MDMtLjAzNyAxLjAyNi0uMTEzYTUuMTMzIDUuMTMzIDAgMCAwIDEuMDEtLjM2djEuMjY4Yy0uMjg3LjE0My0uNTkzLjI1LS45Mi4zMmE1Ljc5IDUuNzkgMCAwIDEtMS4xOTEuMTA0em03LjI1My02LjIyNmMuMjIyIDAgLjQwNi4wMTYuNTUzLjA0OWwtLjEyNCAxLjUzNmExLjg3NyAxLjg3NyAwIDAgMC0uNDgzLS4wNTRjLS41MjMgMC0uOTMuMTM0LTEuMjIyLjQwMy0uMjkyLjI2OC0uNDM4LjY0NC0uNDM4IDEuMTI4VjI0aC0xLjYzOHYtNi4wMDVoMS4yNGwuMjQyIDEuMDFoLjA4Yy4xODctLjMzNy40MzktLjYwOC43NTYtLjgxNGExLjg2IDEuODYgMCAwIDEgMS4wMzQtLjMwOXptNC4wMjkgMS4xNjZjLS4zNDcgMC0uNjIuMTEtLjgxNy4zMy0uMTk3LjIyLS4zMS41MzMtLjMzOC45MzdoMi4yOTljLS4wMDctLjQwNC0uMTEzLS43MTctLjMxNy0uOTM3LS4yMDQtLjIyLS40OC0uMzMtLjgyNy0uMzN6bS4yMyA1LjA2Yy0uOTY2IDAtMS43MjItLjI2Ny0yLjI2Ni0uOC0uNTQ0LS41MzQtLjgxNi0xLjI5LS44MTYtMi4yNjcgMC0xLjAwNy4yNTEtMS43ODUuNzU0LTIuMzM0LjUwNC0uNTUgMS4yLS44MjUgMi4wODctLjgyNS44NDkgMCAxLjUxLjI0MiAxLjk4Mi43MjUuNDczLjQ4NC43MDkgMS4xNTIuNzA5IDIuMDA0di43OTVoLTMuODczYy4wMTguNDY1LjE1Ni44MjkuNDE0IDEuMDkuMjU4LjI2MS42Mi4zOTIgMS4wODUuMzkyLjM2MiAwIC43MDQtLjAzNyAxLjAyNi0uMTEzYTUuMTMzIDUuMTMzIDAgMCAwIDEuMDEtLjM2djEuMjY4Yy0uMjg3LjE0My0uNTkzLjI1LS45MTkuMzJhNS43OSA1Ljc5IDAgMCAxLTEuMTkyLjEwNHptNS44MDMgMGMtLjcwNiAwLTEuMjYtLjI3NS0xLjY2My0uODIyLS40MDMtLjU0OC0uNjA0LTEuMzA3LS42MDQtMi4yNzggMC0uOTg0LjIwNS0xLjc1Mi42MTUtMi4zMDEuNDEtLjU1Ljk3NS0uODI1IDEuNjk1LS44MjUuNzU1IDAgMS4zMzIuMjk0IDEuNzI5Ljg4MWguMDU0YTYuNjk3IDYuNjk3IDAgMCAxLS4xMjQtMS4xOTh2LTEuOTIyaDEuNjQ0VjI0SDQ2LjQzbC0uMzE3LS43NzloLS4wN2MtLjM3Mi41OTEtLjk0Ljg4Ni0xLjcwMi44ODZ6bS41NzQtMS4zMDZjLjQyIDAgLjcyNi0uMTIxLjkyMS0uMzY1LjE5Ni0uMjQzLjMwMi0uNjU3LjMyLTEuMjR2LS4xNzhjMC0uNjQ0LS4xLTEuMTA2LS4yOTgtMS4zODYtLjE5OS0uMjc5LS41MjItLjQxOS0uOTctLjQxOWEuOTYyLjk2MiAwIDAgMC0uODUuNDY1Yy0uMjAzLjMxLS4zMDQuNzYtLjMwNCAxLjM1IDAgLjU5Mi4xMDIgMS4wMzUuMzA2IDEuMzMuMjA0LjI5Ni40OTYuNDQzLjg3NS40NDN6bTEwLjkyMi00LjkyYy43MDkgMCAxLjI2NC4yNzcgMS42NjUuODMuNC41NTMuNjAxIDEuMzEyLjYwMSAyLjI3NSAwIC45OTItLjIwNiAxLjc2LS42MiAyLjMwNC0uNDE0LjU0NC0uOTc3LjgxNi0xLjY5LjgxNi0uNzA1IDAtMS4yNTgtLjI1Ni0xLjY1OS0uNzY4aC0uMTEzbC0uMjc0LjY2MWgtMS4yNTF2LTguMzU3aDEuNjM4djEuOTQ0YzAgLjI0Ny0uMDIxLjY0My0uMDY0IDEuMTg3aC4wNjRjLjM4My0uNTk0Ljk1LS44OTIgMS43MDMtLjg5MnptLS41MjcgMS4zMWMtLjQwNCAwLS43LjEyNS0uODg2LjM3NC0uMTg2LjI0OS0uMjgzLjY2LS4yOSAxLjIzM3YuMTc3YzAgLjY0NS4wOTYgMS4xMDcuMjg3IDEuMzg2LjE5Mi4yOC40OTUuNDE5LjkxLjQxOS4zMzcgMCAuNjA1LS4xNTUuODA0LS40NjUuMTk5LS4zMS4yOTgtLjc2LjI5OC0xLjM1IDAtLjU5MS0uMS0xLjAzNS0uMy0xLjMzYS45NDMuOTQzIDAgMCAwLS44MjMtLjQ0M3ptMy4xODYtMS4xOTdoMS43OTRsMS4xMzQgMy4zNzljLjA5Ni4yOTMuMTYzLjY0LjE5OCAxLjA0MmguMDMzYy4wMzktLjM3LjExNi0uNzE3LjIzLTEuMDQybDEuMTEyLTMuMzc5aDEuNzU3bC0yLjU0IDYuNzczYy0uMjM0LjYyNy0uNTY2IDEuMDk2LS45OTcgMS40MDctLjQzMi4zMTItLjkzNi40NjgtMS41MTIuNDY4LS4yODMgMC0uNTYtLjAzLS44MzMtLjA5MnYtMS4zYTIuOCAyLjggMCAwIDAgLjY0NS4wN2MuMjkgMCAuNTQzLS4wODguNzYtLjI2Ni4yMTctLjE3Ny4zODYtLjQ0NC41MDgtLjgwM2wuMDk2LS4yOTUtMi4zODUtNS45NjJ6Ii8+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzMpIj4KICAgICAgICAgICAgPGNpcmNsZSBjeD0iMTkiIGN5PSIxOSIgcj0iMTkiIGZpbGw9IiNFMEUwRTAiLz4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI0ZGRiIgZD0iTTIyLjQ3NCAxNS40NDNoNS4xNjJMMTIuNDM2IDMwLjRWMTAuMzYzaDE1LjJsLTUuMTYyIDUuMDh6Ii8+CiAgICAgICAgPC9nPgogICAgICAgIDxwYXRoIGZpbGw9IiNEMkQyRDIiIGQ9Ik0xMjEuNTQ0IDE0LjU2di0xLjcyOGg4LjI3MnYxLjcyOGgtMy4wMjRWMjRoLTIuMjR2LTkuNDRoLTMuMDA4em0xMy43NDQgOS41NjhjLTEuMjkgMC0yLjM0MS0uNDE5LTMuMTUyLTEuMjU2LS44MS0uODM3LTEuMjE2LTEuOTQ0LTEuMjE2LTMuMzJzLjQwOC0yLjQ3NyAxLjIyNC0zLjMwNGMuODE2LS44MjcgMS44NzItMS4yNCAzLjE2OC0xLjI0czIuMzYuNDAzIDMuMTkyIDEuMjA4Yy44MzIuODA1IDEuMjQ4IDEuODggMS4yNDggMy4yMjQgMCAuMzEtLjAyMS41OTctLjA2NC44NjRoLTYuNDY0Yy4wNTMuNTc2LjI2NyAxLjA0LjY0IDEuMzkyLjM3My4zNTIuODQ4LjUyOCAxLjQyNC41MjguNzc5IDAgMS4zNTUtLjMyIDEuNzI4LS45NmgyLjQzMmEzLjg5MSAzLjg5MSAwIDAgMS0xLjQ4OCAyLjA2NGMtLjczNi41MzMtMS42MjcuOC0yLjY3Mi44em0xLjQ4LTYuNjg4Yy0uNC0uMzUyLS44ODMtLjUyOC0xLjQ0OC0uNTI4cy0xLjAzNy4xNzYtMS40MTYuNTI4Yy0uMzc5LjM1Mi0uNjA1LjgyMS0uNjggMS40MDhoNC4xOTJjLS4wMzItLjU4Ny0uMjQ4LTEuMDU2LS42NDgtMS40MDh6bTcuMDE2LTIuMzA0djEuNTY4Yy41OTctMS4xMyAxLjQ2MS0xLjY5NiAyLjU5Mi0xLjY5NnYyLjMwNGgtLjU2Yy0uNjcyIDAtMS4xNzkuMTY4LTEuNTIuNTA0LS4zNDEuMzM2LS41MTIuOTE1LS41MTIgMS43MzZWMjRoLTIuMjU2di04Ljg2NGgyLjI1NnptNi40NDggMHYxLjMyOGMuNTY1LS45NyAxLjQ4My0xLjQ1NiAyLjc1Mi0xLjQ1Ni42NzIgMCAxLjI3Mi4xNTUgMS44LjQ2NC41MjguMzEuOTM2Ljc1MiAxLjIyNCAxLjMyOC4zMS0uNTU1LjczMy0uOTkyIDEuMjcyLTEuMzEyYTMuNDg4IDMuNDg4IDAgMCAxIDEuODE2LS40OGMxLjA1NiAwIDEuOTA3LjMzIDIuNTUyLjk5Mi42NDUuNjYxLjk2OCAxLjU5Ljk2OCAyLjc4NFYyNGgtMi4yNHYtNC44OTZjMC0uNjkzLS4xNzYtMS4yMjQtLjUyOC0xLjU5Mi0uMzUyLS4zNjgtLjgzMi0uNTUyLTEuNDQtLjU1MnMtMS4wOS4xODQtMS40NDguNTUyYy0uMzU3LjM2OC0uNTM2Ljg5OS0uNTM2IDEuNTkyVjI0aC0yLjI0di00Ljg5NmMwLS42OTMtLjE3Ni0xLjIyNC0uNTI4LTEuNTkyLS4zNTItLjM2OC0uODMyLS41NTItMS40NC0uNTUycy0xLjA5LjE4NC0xLjQ0OC41NTJjLS4zNTcuMzY4LS41MzYuODk5LS41MzYgMS41OTJWMjRoLTIuMjU2di04Ljg2NGgyLjI1NnpNMTY0LjkzNiAyNFYxMi4xNmgyLjI1NlYyNGgtMi4yNTZ6bTcuMDQtLjE2bC0zLjQ3Mi04LjcwNGgyLjUyOGwyLjI1NiA2LjMwNCAyLjM4NC02LjMwNGgyLjM1MmwtNS41MzYgMTMuMDU2aC0yLjM1MmwxLjg0LTQuMzUyeiIvPgogICAgPC9nPgo8L3N2Zz4K) center no-repeat",
                            display: "block",
                            height: "2.375rem",
                            margin: "0 auto 3.125rem",
                            width: "11.125rem",
                        }}
                    />
                    <div data-custom-class="body">
                        <div>
                            <strong>
                                <span
                                    style={{
                                        fontSize: "26px",
                                    }}>
                                    <span data-custom-class="title">
                                        <bdt className="block-component" />
                                        <bdt className="question">
                                            <h1>PRIVACY POLICY</h1>
                                        </bdt>
                                        <bdt className="statement-end-if-in-editor" />
                                    </span>
                                </span>
                            </strong>
                        </div>
                        <div>
                            <span
                                style={{
                                    color: "rgb(127, 127, 127)",
                                }}>
                                <strong>
                                    <span
                                        style={{
                                            fontSize: "15px",
                                        }}>
                                        <span data-custom-class="subtitle">
                                            Last updated <bdt className="question">April 12, 2025</bdt>
                                        </span>
                                    </span>
                                </strong>
                            </span>
                        </div>
                        <div>
                            <br />
                        </div>
                        <div>
                            <br />
                        </div>
                        <div>
                            <br />
                        </div>
                        <div
                            style={{
                                lineHeight: "1.5",
                            }}>
                            <span
                                style={{
                                    color: "rgb(127, 127, 127)",
                                }}>
                                <span
                                    style={{
                                        color: "rgb(89, 89, 89)",
                                        fontSize: "15px",
                                    }}>
                                    <span data-custom-class="body_text">
                                        This Privacy Notice for{" "}
                                        <bdt className="question">
                                            Chris Renshaw, Freelance Software Engineer
                                            <bdt className="block-component" />
                                        </bdt>{" "}
                                        (
                                        <bdt className="block-component" />'<strong>we</strong>
                                        ', '<strong>us</strong>
                                        ', or '<strong>our</strong>
                                        '
                                        <bdt className="else-block" />
                                    </span>
                                    <span data-custom-class="body_text">
                                        ), describes how and why we might access, collect, store, use,
                                        and/or share (
                                        <bdt className="block-component" />'<strong>process</strong>
                                        '
                                        <bdt className="else-block" />
                                        ) your personal information when you use our services (
                                        <bdt className="block-component" />'<strong>Services</strong>
                                        '
                                        <bdt className="else-block" />
                                        ), including when you:
                                    </span>
                                </span>
                            </span>
                            <span
                                style={{
                                    fontSize: "15px",
                                }}>
                                <span
                                    style={{
                                        color: "rgb(127, 127, 127)",
                                    }}>
                                    <span data-custom-class="body_text">
                                        <span
                                            style={{
                                                color: "rgb(89, 89, 89)",
                                            }}>
                                            <span data-custom-class="body_text">
                                                <bdt className="block-component" />
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </div>
                        <ul>
                            <li
                                data-custom-class="body_text"
                                style={{
                                    lineHeight: "1.5",
                                }}>
                                <span
                                    style={{
                                        color: "rgb(89, 89, 89)",
                                        fontSize: "15px",
                                    }}>
                                    <span
                                        style={{
                                            color: "rgb(89, 89, 89)",
                                            fontSize: "15px",
                                        }}>
                                        <span data-custom-class="body_text">
                                            Visit our website
                                            <bdt className="block-component" /> at{" "}
                                            <span
                                                style={{
                                                    color: "rgb(0, 58, 250)",
                                                }}>
                                                <bdt className="question">
                                                    <a
                                                        data-custom-class="link"
                                                        href="https://www.chrisrenshaw.net"
                                                        target="_blank">
                                                        https://www.chrisrenshaw.net
                                                    </a>
                                                </bdt>
                                            </span>
                                            <span
                                                style={{
                                                    fontSize: "15px",
                                                }}>
                                                <span
                                                    style={{
                                                        color: "rgb(89, 89, 89)",
                                                    }}>
                                                    <span data-custom-class="body_text">
                                                        <span
                                                            style={{
                                                                fontSize: "15px",
                                                            }}>
                                                            <span
                                                                style={{
                                                                    color: "rgb(89, 89, 89)",
                                                                }}>
                                                                <bdt className="statement-end-if-in-editor">
                                                                    , or any website of ours that links to this Privacy
                                                                    Notice
                                                                </bdt>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </li>
                        </ul>
                        <div>
                            <bdt className="block-component">
                                <span
                                    style={{
                                        fontSize: "15px",
                                    }}>
                                    <span
                                        style={{
                                            fontSize: "15px",
                                        }}>
                                        <span
                                            style={{
                                                color: "rgb(127, 127, 127)",
                                            }}>
                                            <span data-custom-class="body_text">
                                                <span
                                                    style={{
                                                        color: "rgb(89, 89, 89)",
                                                    }}>
                                                    <span data-custom-class="body_text">
                                                        <bdt className="block-component" />
                                                    </span>
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </bdt>
                            <div
                                style={{
                                    lineHeight: "1.5",
                                }}>
                                <bdt className="block-component">
                                    <span
                                        style={{
                                            fontSize: "15px",
                                        }}
                                    />
                                </bdt>
                                <div
                                    style={{
                                        lineHeight: "1.5",
                                    }}>
                                    <span
                                        style={{
                                            fontSize: "15px",
                                        }}>
                                        <span
                                            style={{
                                                color: "rgb(127, 127, 127)",
                                            }}>
                                            <span data-custom-class="body_text">
                                                <span
                                                    style={{
                                                        color: "rgb(89, 89, 89)",
                                                    }}>
                                                    <span data-custom-class="body_text">
                                                        <bdt className="block-component" />
                                                    </span>
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </div>
                                <ul>
                                    <li
                                        data-custom-class="body_text"
                                        style={{
                                            lineHeight: "1.5",
                                        }}>
                                        <span
                                            style={{
                                                color: "rgb(89, 89, 89)",
                                                fontSize: "15px",
                                            }}>
                                            <span
                                                style={{
                                                    color: "rgb(89, 89, 89)",
                                                    fontSize: "15px",
                                                }}>
                                                <span data-custom-class="body_text">
                                                    Engage with us in other related ways, including any sales,
                                                    marketing, or events
                                                    <span
                                                        style={{
                                                            fontSize: "15px",
                                                        }}>
                                                        <span
                                                            style={{
                                                                color: "rgb(89, 89, 89)",
                                                            }}>
                                                            <span data-custom-class="body_text">
                                                                <span
                                                                    style={{
                                                                        fontSize: "15px",
                                                                    }}>
                                                                    <span
                                                                        style={{
                                                                            color: "rgb(89, 89, 89)",
                                                                        }}>
                                                                        <bdt className="statement-end-if-in-editor" />
                                                                    </span>
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </span>
                                        </span>
                                    </li>
                                </ul>
                                <div
                                    style={{
                                        lineHeight: "1.5",
                                    }}>
                                    <span
                                        style={{
                                            fontSize: "15px",
                                        }}>
                                        <span
                                            style={{
                                                color: "rgb(127, 127, 127)",
                                            }}>
                                            <span data-custom-class="body_text">
                                                <strong>Questions or concerns? </strong>
                                                Reading this Privacy Notice will help you understand your
                                                privacy rights and choices. We are responsible for making
                                                decisions about how your personal information is processed. If
                                                you do not agree with our policies and practices, please do not
                                                use our Services.
                                                <bdt className="block-component" /> If you still have any
                                                questions or concerns, please contact us at{" "}
                                                <bdt className="question">CRSoftwareEngineer@outlook.com</bdt>.
                                            </span>
                                        </span>
                                    </span>
                                </div>
                                <div
                                    style={{
                                        lineHeight: "1.5",
                                    }}>
                                    <br />
                                </div>
                                <div
                                    style={{
                                        lineHeight: "1.5",
                                    }}>
                                    <br />
                                </div>
                                <div
                                    style={{
                                        lineHeight: "1.5",
                                    }}>
                                    <strong>
                                        <span
                                            style={{
                                                fontSize: "15px",
                                            }}>
                                            <span data-custom-class="heading_1">
                                                <h2>SUMMARY OF KEY POINTS</h2>
                                            </span>
                                        </span>
                                    </strong>
                                </div>
                                <div
                                    style={{
                                        lineHeight: "1.5",
                                    }}>
                                    <span
                                        style={{
                                            fontSize: "15px",
                                        }}>
                                        <span data-custom-class="body_text">
                                            <strong>
                                                <em>
                                                    This summary provides key points from our Privacy Notice, but
                                                    you can find out more details about any of these topics by
                                                    clicking the link following each key point or by using our
                                                </em>
                                            </strong>
                                        </span>
                                    </span>
                                    <a data-custom-class="link" href="#toc">
                                        <span
                                            style={{
                                                color: "rgb(0, 58, 250)",
                                                fontSize: "15px",
                                            }}>
                                            <span data-custom-class="body_text">
                                                <strong>
                                                    <em> table of contents</em>
                                                </strong>
                                            </span>
                                        </span>
                                    </a>
                                    <span
                                        style={{
                                            fontSize: "15px",
                                        }}>
                                        <span data-custom-class="body_text">
                                            <strong>
                                                <em> below to find the section you are looking for.</em>
                                            </strong>
                                        </span>
                                    </span>
                                </div>
                                <div
                                    style={{
                                        lineHeight: "1.5",
                                    }}>
                                    <br />
                                </div>
                                <div
                                    style={{
                                        lineHeight: "1.5",
                                    }}>
                                    <span
                                        style={{
                                            fontSize: "15px",
                                        }}>
                                        <span data-custom-class="body_text">
                                            <strong>What personal information do we process?</strong> When you
                                            visit, use, or navigate our Services, we may process personal
                                            information depending on how you interact with us and the
                                            Services, the choices you make, and the products and features you
                                            use. Learn more about
                                        </span>
                                    </span>
                                    <a data-custom-class="link" href="#personalinfo">
                                        <span
                                            style={{
                                                color: "rgb(0, 58, 250)",
                                                fontSize: "15px",
                                            }}>
                                            <span data-custom-class="body_text">
                                                <strong><em> personal information you disclose to us</em></strong>
                                            </span>
                                        </span>
                                    </a>
                                    <span data-custom-class="body_text">.</span>
                                </div>
                                <div
                                    style={{
                                        lineHeight: "1.5",
                                    }}>
                                    <br />
                                </div>
                                <div
                                    style={{
                                        lineHeight: "1.5",
                                    }}>
                                    <span
                                        style={{
                                            fontSize: "15px",
                                        }}>
                                        <span data-custom-class="body_text">
                                            <strong>
                                                Do we process any sensitive personal information?
                                            </strong>
                                            Some of the information may be considered{" "}
                                            <bdt className="block-component" />
                                            'special' or 'sensitive'
                                            <bdt className="else-block" /> in certain jurisdictions, for
                                            example your racial or ethnic origins, sexual orientation, and
                                            religious beliefs. <bdt className="block-component" />
                                            We do not process sensitive personal information.
                                            <bdt className="else-block" />
                                        </span>
                                    </span>
                                </div>
                                <div
                                    style={{
                                        lineHeight: "1.5",
                                    }}>
                                    <br />
                                </div>
                                <div
                                    style={{
                                        lineHeight: "1.5",
                                    }}>
                                    <span
                                        style={{
                                            fontSize: "15px",
                                        }}>
                                        <span data-custom-class="body_text">
                                            <strong>Do we collect any information from third parties?</strong>{" "}
                                            <bdt className="block-component" />
                                            We do not collect any information from third parties.
                                            <bdt className="else-block" />
                                        </span>
                                    </span>
                                </div>
                                <div
                                    style={{
                                        lineHeight: "1.5",
                                    }}>
                                    <br />
                                </div>
                                <div
                                    style={{
                                        lineHeight: "1.5",
                                    }}>
                                    <span
                                        style={{
                                            fontSize: "15px",
                                        }}>
                                        <span data-custom-class="body_text">
                                            <strong>How do we process your information?</strong> We process
                                            your information to provide, improve, and administer our Services,
                                            communicate with you, for security and fraud prevention, and to
                                            comply with law. We may also process your information for other
                                            purposes with your consent. We process your information only when
                                            we have a valid legal reason to do so. Learn more about
                                        </span>
                                    </span>
                                    <a data-custom-class="link" href="#infouse">
                                        <span
                                            style={{
                                                color: "rgb(0, 58, 250)",
                                                fontSize: "15px",
                                            }}>
                                            <span data-custom-class="body_text"><strong><em> how we process your information</em></strong>
                                            </span>
                                        </span>
                                    </a>
                                    <span data-custom-class="body_text">.</span>
                                </div>
                                <div
                                    style={{
                                        lineHeight: "1.5",
                                    }}>
                                    <br />
                                </div>
                                <div
                                    style={{
                                        lineHeight: "1.5",
                                    }}>
                                    <span
                                        style={{
                                            fontSize: "15px",
                                        }}>
                                        <span data-custom-class="body_text">
                                            <strong>
                                                In what situations and with which{" "}
                                                <bdt className="block-component" />
                                                types of <bdt className="statement-end-if-in-editor" />
                                                parties do we share personal information?
                                            </strong>{" "}
                                            We may share information in specific situations and with specific{" "}
                                            <bdt className="block-component" />
                                            categories of <bdt className="statement-end-if-in-editor" />
                                            third parties. Learn more about
                                        </span>
                                    </span>
                                    <a data-custom-class="link" href="#whoshare">
                                        <span
                                            style={{
                                                color: "rgb(0, 58, 250)",
                                                fontSize: "15px",
                                            }}>
                                            <span data-custom-class="body_text">
                                            <strong><em> when and with whom we share your personal information
                                            </em></strong>
                                            </span>
                                        </span>
                                    </a>
                                    <span
                                        style={{
                                            fontSize: "15px",
                                        }}>
                                        <span data-custom-class="body_text">
                                            .
                                            <bdt className="block-component" />
                                        </span>
                                    </span>
                                </div>
                                <div
                                    style={{
                                        lineHeight: "1.5",
                                    }}>
                                    <br />
                                </div>
                                <div
                                    style={{
                                        lineHeight: "1.5",
                                    }}>
                                    <span
                                        style={{
                                            fontSize: "15px",
                                        }}>
                                        <span data-custom-class="body_text">
                                            <strong>How do we keep your information safe?</strong> We have
                                            adequate <bdt className="block-component" />
                                            organisational
                                            <bdt className="else-block" /> and technical processes and
                                            procedures in place to protect your personal information. However,
                                            no electronic transmission over the internet or information
                                            storage technology can be guaranteed to be 100% secure, so we
                                            cannot promise or guarantee that hackers, cybercriminals, or other{" "}
                                            <bdt className="block-component" />
                                            unauthorised
                                            <bdt className="else-block" /> third parties will not be able to
                                            defeat our security and improperly collect, access, steal, or
                                            modify your information. Learn more about
                                        </span>
                                    </span>
                                    <a data-custom-class="link" href="#infosafe">
                                        <span
                                            style={{
                                                color: "rgb(0, 58, 250)",
                                                fontSize: "15px",
                                            }}>
                                            <span data-custom-class="body_text">
                                            <strong><em> how we keep your information safe
                                            </em></strong>
                                            </span>
                                        </span>
                                    </a>
                                    <span data-custom-class="body_text">.</span>
                                    <span
                                        style={{
                                            fontSize: "15px",
                                        }}>
                                        <span data-custom-class="body_text">
                                            <bdt className="statement-end-if-in-editor" />
                                        </span>
                                    </span>
                                </div>
                                <div
                                    style={{
                                        lineHeight: "1.5",
                                    }}>
                                    <br />
                                </div>
                                <div
                                    style={{
                                        lineHeight: "1.5",
                                    }}>
                                    <span
                                        style={{
                                            fontSize: "15px",
                                        }}>
                                        <span data-custom-class="body_text">
                                            <strong>What are your rights?</strong> Depending on where you are
                                            located geographically, the applicable privacy law may mean you
                                            have certain rights regarding your personal information. Learn
                                            more about
                                        </span>
                                    </span>
                                    <a data-custom-class="link" href="#privacyrights">
                                        <span
                                            style={{
                                                color: "rgb(0, 58, 250)",
                                                fontSize: "15px",
                                            }}>
                                            <span data-custom-class="body_text"><strong><em> your privacy rights</em></strong></span>
                                        </span>
                                    </a>
                                    <span data-custom-class="body_text">.</span>
                                </div>
                                <div
                                    style={{
                                        lineHeight: "1.5",
                                    }}>
                                    <br />
                                </div>
                                <div
                                    style={{
                                        lineHeight: "1.5",
                                    }}>
                                    <span
                                        style={{
                                            fontSize: "15px",
                                        }}>
                                        <span data-custom-class="body_text">
                                            <strong>How do you exercise your rights?</strong> The easiest way
                                            to exercise your rights is by{" "}
                                            <bdt className="block-component">submitting a </bdt>
                                        </span>
                                    </span>
                                    <a
                                        data-custom-class="link"
                                        href="https://app.termly.io/notify/cfd49fdc-8eab-4b37-81b5-358d5e7171c9"
                                        rel="noopener noreferrer"
                                        target="_blank">
                                        <span
                                            style={{
                                                color: "rgb(0, 58, 250)",
                                                fontSize: "15px",
                                            }}>
                                            <span data-custom-class="body_text">
                                                data subject access request
                                            </span>
                                        </span>
                                    </a>
                                    <span
                                        style={{
                                            fontSize: "15px",
                                        }}>
                                        <span data-custom-class="body_text">
                                            <bdt className="block-component" />, or by contacting us. We will
                                            consider and act upon any request in accordance with applicable
                                            data protection laws.
                                        </span>
                                    </span>
                                </div>
                                <div
                                    style={{
                                        lineHeight: "1.5",
                                    }}>
                                    <br />
                                </div>
                                <div
                                    style={{
                                        lineHeight: "1.5",
                                    }}>
                                    <span
                                        style={{
                                            fontSize: "15px",
                                        }}>
                                        <span data-custom-class="body_text">
                                            Want to learn more about what we do with any information we
                                            collect?
                                        </span>
                                    </span>
                                    <a data-custom-class="link" href="#toc">
                                        <span
                                            style={{
                                                color: "rgb(0, 58, 250)",
                                                fontSize: "15px",
                                            }}>
                                            <span data-custom-class="body_text"><strong><em>  Review the Privacy Notice in full</em></strong>
                                            </span>
                                        </span>
                                    </a>
                                    <span
                                        style={{
                                            fontSize: "15px",
                                        }}>
                                        <span data-custom-class="body_text">.</span>
                                    </span>
                                </div>
                                <div
                                    style={{
                                        lineHeight: "1.5",
                                    }}>
                                    <br />
                                </div>
                                <div
                                    style={{
                                        lineHeight: "1.5",
                                    }}>
                                    <br />
                                </div>
                                <div
                                    id="toc"
                                    style={{
                                        lineHeight: "1.5",
                                    }}>
                                    <span
                                        style={{
                                            fontSize: "15px",
                                        }}>
                                        <span
                                            style={{
                                                color: "rgb(127, 127, 127)",
                                            }}>
                                            <span
                                                style={{
                                                    color: "rgb(0, 0, 0)",
                                                }}>
                                                <strong>
                                                    <span data-custom-class="heading_1">
                                                        <h2>TABLE OF CONTENTS</h2>
                                                    </span>
                                                </strong>
                                            </span>
                                        </span>
                                    </span>
                                </div>
                                <div
                                    style={{
                                        lineHeight: "1.5",
                                    }}>
                                    <span
                                        style={{
                                            fontSize: "15px",
                                        }}>
                                        <a data-custom-class="link" href="#infocollect">
                                            <span
                                                style={{
                                                    color: "rgb(0, 58, 250)",
                                                }}>
                                                1. WHAT INFORMATION DO WE COLLECT?
                                            </span>
                                        </a>
                                    </span>
                                </div>
                                <div
                                    style={{
                                        lineHeight: "1.5",
                                    }}>
                                    <span
                                        style={{
                                            fontSize: "15px",
                                        }}>
                                        <a data-custom-class="link" href="#infouse">
                                            <span
                                                style={{
                                                    color: "rgb(0, 58, 250)",
                                                }}>
                                                2. HOW DO WE PROCESS YOUR INFORMATION?
                                                <bdt className="block-component" />
                                            </span>
                                        </a>
                                    </span>
                                </div>
                                <div
                                    style={{
                                        lineHeight: "1.5",
                                    }}>
                                    <span
                                        style={{
                                            fontSize: "15px",
                                        }}>
                                        <a data-custom-class="link" href="#legalbases">
                                            <span
                                                style={{
                                                    color: "rgb(0, 58, 250)",
                                                }}>
                                                3.{" "}
                                                <span
                                                    style={{
                                                        fontSize: "15px",
                                                    }}>
                                                    <span
                                                        style={{
                                                            color: "rgb(0, 58, 250)",
                                                        }}>
                                                        WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL
                                                        INFORMATION?
                                                    </span>
                                                </span>
                                                <bdt className="statement-end-if-in-editor" />
                                            </span>
                                        </a>
                                    </span>
                                </div>
                                <div
                                    style={{
                                        lineHeight: "1.5",
                                    }}>
                                    <span
                                        style={{
                                            fontSize: "15px",
                                        }}>
                                        <span
                                            style={{
                                                color: "rgb(0, 58, 250)",
                                            }}>
                                            <a data-custom-class="link" href="#whoshare">
                                                4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
                                            </a>
                                        </span>
                                        <span data-custom-class="body_text">
                                            <bdt className="block-component" />
                                            <span
                                                style={{
                                                    color: "rgb(127, 127, 127)",
                                                }}>
                                                <span
                                                    style={{
                                                        color: "rgb(89, 89, 89)",
                                                    }}>
                                                    <span data-custom-class="body_text">
                                                        <span
                                                            style={{
                                                                color: "rgb(89, 89, 89)",
                                                            }}>
                                                            <bdt className="block-component" />
                                                        </span>
                                                    </span>
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </div>
                                <div
                                    style={{
                                        lineHeight: "1.5",
                                    }}>
                                    <span
                                        style={{
                                            fontSize: "15px",
                                        }}>
                                        <a data-custom-class="link" href="#cookies">
                                            <span
                                                style={{
                                                    color: "rgb(0, 58, 250)",
                                                }}>
                                                5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
                                            </span>
                                        </a>
                                        <span
                                            style={{
                                                color: "rgb(127, 127, 127)",
                                            }}>
                                            <span
                                                style={{
                                                    color: "rgb(89, 89, 89)",
                                                }}>
                                                <span data-custom-class="body_text">
                                                    <span
                                                        style={{
                                                            color: "rgb(89, 89, 89)",
                                                        }}>
                                                        <bdt className="statement-end-if-in-editor" />
                                                    </span>
                                                </span>
                                            </span>
                                        </span>
                                        <bdt className="block-component" />
                                    </span>
                                </div>
                                <div
                                    style={{
                                        lineHeight: "1.5",
                                    }}>
                                    <span
                                        style={{
                                            fontSize: "15px",
                                        }}>
                                        <span
                                            style={{
                                                color: "rgb(127, 127, 127)",
                                            }}>
                                            <span
                                                style={{
                                                    color: "rgb(89, 89, 89)",
                                                }}>
                                                <span data-custom-class="body_text">
                                                    <span
                                                        style={{
                                                            color: "rgb(89, 89, 89)",
                                                        }}>
                                                        <span
                                                            style={{
                                                                color: "rgb(89, 89, 89)",
                                                            }}>
                                                            <span
                                                                style={{
                                                                    color: "rgb(89, 89, 89)",
                                                                }}>
                                                                <bdt className="block-component" />
                                                            </span>
                                                        </span>
                                                        <bdt className="block-component" />
                                                    </span>
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </div>
                                <div
                                    style={{
                                        lineHeight: "1.5",
                                    }}>
                                    <span
                                        style={{
                                            fontSize: "15px",
                                        }}>
                                        <a data-custom-class="link" href="#inforetain">
                                            <span
                                                style={{
                                                    color: "rgb(0, 58, 250)",
                                                }}>
                                                6. HOW LONG DO WE KEEP YOUR INFORMATION?
                                            </span>
                                        </a>
                                        <span
                                            style={{
                                                color: "rgb(127, 127, 127)",
                                            }}>
                                            <span
                                                style={{
                                                    color: "rgb(89, 89, 89)",
                                                }}>
                                                <span data-custom-class="body_text">
                                                    <span
                                                        style={{
                                                            color: "rgb(89, 89, 89)",
                                                        }}>
                                                        <span
                                                            style={{
                                                                color: "rgb(89, 89, 89)",
                                                            }}>
                                                            <bdt className="block-component" />
                                                        </span>
                                                    </span>
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </div>
                                <div
                                    style={{
                                        lineHeight: "1.5",
                                    }}>
                                    <span
                                        style={{
                                            fontSize: "15px",
                                        }}>
                                        <a data-custom-class="link" href="#infosafe">
                                            <span
                                                style={{
                                                    color: "rgb(0, 58, 250)",
                                                }}>
                                                7. HOW DO WE KEEP YOUR INFORMATION SAFE?
                                            </span>
                                        </a>
                                        <span
                                            style={{
                                                color: "rgb(127, 127, 127)",
                                            }}>
                                            <span
                                                style={{
                                                    color: "rgb(89, 89, 89)",
                                                }}>
                                                <span data-custom-class="body_text">
                                                    <span
                                                        style={{
                                                            color: "rgb(89, 89, 89)",
                                                        }}>
                                                        <bdt className="statement-end-if-in-editor" />
                                                        <bdt className="block-component" />
                                                    </span>
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </div>
                                <div
                                    style={{
                                        lineHeight: "1.5",
                                    }}>
                                    <span
                                        style={{
                                            fontSize: "15px",
                                        }}>
                                        <a data-custom-class="link" href="#infominors">
                                            <span
                                                style={{
                                                    color: "rgb(0, 58, 250)",
                                                }}>
                                                8. DO WE COLLECT INFORMATION FROM MINORS?
                                            </span>
                                        </a>
                                        <span
                                            style={{
                                                color: "rgb(127, 127, 127)",
                                            }}>
                                            <span
                                                style={{
                                                    color: "rgb(89, 89, 89)",
                                                }}>
                                                <span data-custom-class="body_text">
                                                    <span
                                                        style={{
                                                            color: "rgb(89, 89, 89)",
                                                        }}>
                                                        <bdt className="statement-end-if-in-editor" />
                                                    </span>
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </div>
                                <div
                                    style={{
                                        lineHeight: "1.5",
                                    }}>
                                    <span
                                        style={{
                                            fontSize: "15px",
                                        }}>
                                        <span
                                            style={{
                                                color: "rgb(0, 58, 250)",
                                            }}>
                                            <a data-custom-class="link" href="#privacyrights">
                                                9. WHAT ARE YOUR PRIVACY RIGHTS?
                                            </a>
                                        </span>
                                    </span>
                                </div>
                                <div
                                    style={{
                                        lineHeight: "1.5",
                                    }}>
                                    <span
                                        style={{
                                            fontSize: "15px",
                                        }}>
                                        <a data-custom-class="link" href="#DNT">
                                            <span
                                                style={{
                                                    color: "rgb(0, 58, 250)",
                                                }}>
                                                10. CONTROLS FOR DO-NOT-TRACK FEATURES
                                                <bdt className="block-component" />
                                            </span>
                                            <bdt className="block-component">
                                                <span
                                                    style={{
                                                        fontSize: "15px",
                                                    }}>
                                                    <span data-custom-class="body_text" />
                                                </span>
                                            </bdt>
                                        </a>
                                    </span>
                                </div>
                                <div
                                    style={{
                                        lineHeight: "1.5",
                                    }}>
                                    <a data-custom-class="link" href="#DNT">
                                        <bdt className="block-component">
                                            <span
                                                style={{
                                                    fontSize: "15px",
                                                }}
                                            />
                                        </bdt>
                                        <bdt className="block-component" />
                                        <bdt className="block-component" />
                                        <bdt className="block-component" />
                                        <bdt className="block-component" />
                                        <bdt className="block-component" />
                                        <bdt className="block-component" />
                                        <bdt className="block-component" />
                                        <bdt className="block-component" />
                                        <bdt className="block-component" />
                                    </a>
                                </div>
                                <div
                                    style={{
                                        lineHeight: "1.5",
                                    }}>
                                    <a data-custom-class="link" href="#DNT">
                                        <span
                                            style={{
                                                fontSize: "15px",
                                            }}
                                        />
                                    </a>
                                    <a data-custom-class="link" href="#policyupdates">
                                        <span
                                            style={{
                                                color: "rgb(0, 58, 250)",
                                            }}>
                                            11. DO WE MAKE UPDATES TO THIS NOTICE?
                                        </span>
                                    </a>
                                </div>
                                <div
                                    style={{
                                        lineHeight: "1.5",
                                    }}>
                                    <a data-custom-class="link" href="#contact">
                                        <span
                                            style={{
                                                color: "rgb(0, 58, 250)",
                                                fontSize: "15px",
                                            }}>
                                            12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
                                        </span>
                                    </a>
                                </div>
                                <div
                                    style={{
                                        lineHeight: "1.5",
                                    }}>
                                    <a data-custom-class="link" href="#request">
                                        <span
                                            style={{
                                                color: "rgb(0, 58, 250)",
                                            }}>
                                            13. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM
                                            YOU?
                                        </span>
                                    </a>
                                </div>
                                <div
                                    style={{
                                        lineHeight: "1.5",
                                    }}>
                                    <br />
                                </div>
                                <div
                                    style={{
                                        lineHeight: "1.5",
                                    }}>
                                    <br />
                                </div>
                                <div
                                    id="infocollect"
                                    style={{
                                        lineHeight: "1.5",
                                    }}>
                                    <span
                                        style={{
                                            color: "rgb(0, 0, 0)",
                                        }}>
                                        <span
                                            style={{
                                                color: "rgb(0, 0, 0)",
                                                fontSize: "15px",
                                            }}>
                                            <span
                                                style={{
                                                    color: "rgb(0, 0, 0)",
                                                    fontSize: "15px",
                                                }}>
                                                <span
                                                    style={{
                                                        color: "rgb(0, 0, 0)",
                                                        fontSize: "15px",
                                                    }}>
                                                    <span
                                                        id="control"
                                                        style={{
                                                            color: "rgb(0, 0, 0)",
                                                        }}>
                                                        <strong>
                                                            <span data-custom-class="heading_1">
                                                                <h2>1. WHAT INFORMATION DO WE COLLECT?</h2>
                                                            </span>
                                                        </strong>
                                                    </span>
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                    <span
                                        data-custom-class="heading_2"
                                        id="personalinfo"
                                        style={{
                                            color: "rgb(0, 0, 0)",
                                        }}>
                                        <span
                                            style={{
                                                fontSize: "15px",
                                            }}>
                                            <strong>
                                                <h3>Personal information you disclose to us</h3>
                                            </strong>
                                        </span>
                                    </span>
                                    <span
                                        style={{
                                            color: "rgb(127, 127, 127)",
                                        }}>
                                        <span
                                            style={{
                                                color: "rgb(89, 89, 89)",
                                                fontSize: "15px",
                                            }}>
                                            <span data-custom-class="body_text">
                                                <span
                                                    style={{
                                                        color: "rgb(89, 89, 89)",
                                                        fontSize: "15px",
                                                    }}>
                                                    <span
                                                        style={{
                                                            color: "rgb(89, 89, 89)",
                                                            fontSize: "15px",
                                                        }}>
                                                        <span data-custom-class="body_text">
                                                            <strong>
                                                                <em>In Short:</em>
                                                            </strong>
                                                        </span>
                                                    </span>
                                                </span>
                                            </span>
                                            <span data-custom-class="body_text">
                                                <span
                                                    style={{
                                                        color: "rgb(89, 89, 89)",
                                                        fontSize: "15px",
                                                    }}>
                                                    <span
                                                        style={{
                                                            color: "rgb(89, 89, 89)",
                                                            fontSize: "15px",
                                                        }}>
                                                        <span data-custom-class="body_text">
                                                            <strong>
                                                                <em></em>
                                                            </strong>
                                                            <em>
                                                                We collect personal information that you provide to us.
                                                            </em>
                                                        </span>
                                                    </span>
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </div>
                                <div
                                    style={{
                                        lineHeight: "1.5",
                                    }}>
                                    <br />
                                </div>
                                <div
                                    style={{
                                        lineHeight: "1.5",
                                    }}>
                                    <span
                                        style={{
                                            color: "rgb(89, 89, 89)",
                                            fontSize: "15px",
                                        }}>
                                        <span
                                            style={{
                                                color: "rgb(89, 89, 89)",
                                                fontSize: "15px",
                                            }}>
                                            <span data-custom-class="body_text">
                                                We collect personal information that you voluntarily provide to
                                                us when you{" "}
                                                <span
                                                    style={{
                                                        fontSize: "15px",
                                                    }}>
                                                    <bdt className="block-component" />
                                                </span>
                                            </span>
                                            <span data-custom-class="body_text">
                                                express an interest in obtaining information about us or our
                                                products and Services, when you participate in activities on the
                                                Services, or otherwise when you contact us.
                                            </span>
                                        </span>
                                    </span>
                                </div>
                                <div
                                    style={{
                                        lineHeight: "1.5",
                                    }}>
                                    <br />
                                </div>
                                <div
                                    style={{
                                        lineHeight: "1.5",
                                    }}>
                                    <span
                                        style={{
                                            color: "rgb(89, 89, 89)",
                                            fontSize: "15px",
                                        }}>
                                        <span
                                            style={{
                                                color: "rgb(89, 89, 89)",
                                                fontSize: "15px",
                                            }}>
                                            <span data-custom-class="body_text">
                                                <span
                                                    style={{
                                                        fontSize: "15px",
                                                    }}>
                                                    <bdt className="block-component" />
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </div>
                                <div
                                    style={{
                                        lineHeight: "1.5",
                                    }}>
                                    <span
                                        style={{
                                            color: "rgb(89, 89, 89)",
                                            fontSize: "15px",
                                        }}>
                                        <span
                                            style={{
                                                color: "rgb(89, 89, 89)",
                                                fontSize: "15px",
                                            }}>
                                            <span data-custom-class="body_text">
                                                <strong>Personal Information Provided by You.</strong> The
                                                personal information that we collect depends on the context of
                                                your interactions with us and the Services, the choices you
                                                make, and the products and features you use. The personal
                                                information we collect may include the following:
                                                <span
                                                    style={{
                                                        fontSize: "15px",
                                                    }}>
                                                    <span data-custom-class="body_text">
                                                        <bdt className="forloop-component" />
                                                    </span>
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </div>
                                <ul>
                                    <li
                                        data-custom-class="body_text"
                                        style={{
                                            lineHeight: "1.5",
                                        }}>
                                        <span
                                            style={{
                                                color: "rgb(89, 89, 89)",
                                                fontSize: "15px",
                                            }}>
                                            <span
                                                style={{
                                                    color: "rgb(89, 89, 89)",
                                                    fontSize: "15px",
                                                }}>
                                                <span data-custom-class="body_text">
                                                    <span
                                                        style={{
                                                            fontSize: "15px",
                                                        }}>
                                                        <span data-custom-class="body_text">
                                                            <bdt className="question">names</bdt>
                                                        </span>
                                                    </span>
                                                </span>
                                            </span>
                                        </span>
                                    </li>
                                </ul>
                                <div
                                    style={{
                                        lineHeight: "1.5",
                                    }}>
                                    <span
                                        style={{
                                            color: "rgb(89, 89, 89)",
                                            fontSize: "15px",
                                        }}>
                                        <span
                                            style={{
                                                color: "rgb(89, 89, 89)",
                                                fontSize: "15px",
                                            }}>
                                            <span data-custom-class="body_text">
                                                <span
                                                    style={{
                                                        fontSize: "15px",
                                                    }}>
                                                    <span data-custom-class="body_text">
                                                        <bdt className="forloop-component" />
                                                    </span>
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </div>
                                <ul>
                                    <li
                                        data-custom-class="body_text"
                                        style={{
                                            lineHeight: "1.5",
                                        }}>
                                        <span
                                            style={{
                                                color: "rgb(89, 89, 89)",
                                                fontSize: "15px",
                                            }}>
                                            <span
                                                style={{
                                                    color: "rgb(89, 89, 89)",
                                                    fontSize: "15px",
                                                }}>
                                                <span data-custom-class="body_text">
                                                    <span
                                                        style={{
                                                            fontSize: "15px",
                                                        }}>
                                                        <span data-custom-class="body_text">
                                                            <bdt className="question">email addresses</bdt>
                                                        </span>
                                                    </span>
                                                </span>
                                            </span>
                                        </span>
                                    </li>
                                </ul>
                                <div
                                    style={{
                                        lineHeight: "1.5",
                                    }}>
                                    <span
                                        style={{
                                            color: "rgb(89, 89, 89)",
                                            fontSize: "15px",
                                        }}>
                                        <span
                                            style={{
                                                color: "rgb(89, 89, 89)",
                                                fontSize: "15px",
                                            }}>
                                            <span data-custom-class="body_text">
                                                <span
                                                    style={{
                                                        fontSize: "15px",
                                                    }}>
                                                    <span data-custom-class="body_text">
                                                        <bdt className="forloop-component" />
                                                    </span>
                                                    <span data-custom-class="body_text">
                                                        <bdt className="statement-end-if-in-editor" />
                                                    </span>
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </div>
                                <div
                                    id="sensitiveinfo"
                                    style={{
                                        lineHeight: "1.5",
                                    }}>
                                    <span
                                        style={{
                                            fontSize: "15px",
                                        }}>
                                        <span data-custom-class="body_text">
                                            <strong>Sensitive Information.</strong>{" "}
                                            <bdt className="block-component" />
                                            We do not process sensitive information.
                                        </span>
                                    </span>
                                </div>
                                <div
                                    style={{
                                        lineHeight: "1.5",
                                    }}>
                                    <br />
                                </div>
                                <div
                                    style={{
                                        lineHeight: "1.5",
                                    }}>
                                    <span
                                        style={{
                                            fontSize: "15px",
                                        }}>
                                        <span data-custom-class="body_text">
                                            <bdt className="else-block" />
                                        </span>
                                    </span>
                                    <span
                                        style={{
                                            color: "rgb(89, 89, 89)",
                                            fontSize: "15px",
                                        }}>
                                        <span
                                            style={{
                                                color: "rgb(89, 89, 89)",
                                                fontSize: "15px",
                                            }}>
                                            <span data-custom-class="body_text">
                                                <span
                                                    style={{
                                                        fontSize: "15px",
                                                    }}>
                                                    <span data-custom-class="body_text">
                                                        <bdt className="block-component" />
                                                    </span>
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </div>
                                <div
                                    style={{
                                        lineHeight: "1.5",
                                    }}>
                                    <span
                                        style={{
                                            color: "rgb(89, 89, 89)",
                                            fontSize: "15px",
                                        }}>
                                        <span
                                            style={{
                                                color: "rgb(89, 89, 89)",
                                                fontSize: "15px",
                                            }}>
                                            <span data-custom-class="body_text">
                                                <strong>Payment Data.</strong> We may collect data necessary to
                                                process your payment if you choose to make purchases, such as
                                                your payment instrument number, and the security code associated
                                                with your payment instrument. All payment data is handled and
                                                stored by
                                                <bdt className="forloop-component" />
                                                <span
                                                    style={{
                                                        color: "rgb(89, 89, 89)",
                                                        fontSize: "15px",
                                                    }}>
                                                    <span
                                                        style={{
                                                            color: "rgb(89, 89, 89)",
                                                            fontSize: "15px",
                                                        }}>
                                                        <span data-custom-class="body_text">
                                                            <span
                                                                style={{
                                                                    fontSize: "15px",
                                                                }}>
                                                                <span data-custom-class="body_text">
                                                                    <bdt className="block-component" />
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>{" "}
                                                <bdt className="question">Stripe</bdt>
                                                <span
                                                    style={{
                                                        color: "rgb(89, 89, 89)",
                                                        fontSize: "15px",
                                                    }}>
                                                    <span
                                                        style={{
                                                            color: "rgb(89, 89, 89)",
                                                            fontSize: "15px",
                                                        }}>
                                                        <span data-custom-class="body_text">
                                                            <span
                                                                style={{
                                                                    color: "rgb(89, 89, 89)",
                                                                    fontSize: "15px",
                                                                }}>
                                                                <span
                                                                    style={{
                                                                        color: "rgb(89, 89, 89)",
                                                                        fontSize: "15px",
                                                                    }}>
                                                                    <span data-custom-class="body_text">
                                                                        <span
                                                                            style={{
                                                                                fontSize: "15px",
                                                                            }}>
                                                                            <span data-custom-class="body_text">
                                                                                <bdt className="block-component" />
                                                                            </span>
                                                                        </span>
                                                                    </span>
                                                                    <span data-custom-class="body_text">
                                                                        <span
                                                                            style={{
                                                                                fontSize: "15px",
                                                                            }}>
                                                                            <span
                                                                                style={{
                                                                                    color: "rgb(89, 89, 89)",
                                                                                }}>
                                                                                <span data-custom-class="body_text">
                                                                                    <span
                                                                                        style={{
                                                                                            fontSize: "15px",
                                                                                        }}>
                                                                                        <span
                                                                                            style={{
                                                                                                color: "rgb(89, 89, 89)",
                                                                                            }}>
                                                                                            <span data-custom-class="body_text">
                                                                                                <span
                                                                                                    style={{
                                                                                                        color: "rgb(89, 89, 89)",
                                                                                                    }}>
                                                                                                    <span
                                                                                                        style={{
                                                                                                            fontSize: "15px",
                                                                                                        }}>
                                                                                                        <span data-custom-class="body_text">
                                                                                                            <bdt className="forloop-component" />
                                                                                                        </span>
                                                                                                    </span>
                                                                                                </span>
                                                                                            </span>
                                                                                        </span>
                                                                                    </span>
                                                                                </span>
                                                                            </span>
                                                                        </span>
                                                                    </span>
                                                                </span>
                                                            </span>
                                                            . You may find their privacy notice link(s) here:
                                                            <span
                                                                style={{
                                                                    color: "rgb(89, 89, 89)",
                                                                    fontSize: "15px",
                                                                }}>
                                                                <span
                                                                    style={{
                                                                        color: "rgb(89, 89, 89)",
                                                                        fontSize: "15px",
                                                                    }}>
                                                                    <span data-custom-class="body_text">
                                                                        <bdt className="forloop-component" />
                                                                        <span
                                                                            style={{
                                                                                color: "rgb(89, 89, 89)",
                                                                                fontSize: "15px",
                                                                            }}>
                                                                            <span
                                                                                style={{
                                                                                    color: "rgb(89, 89, 89)",
                                                                                    fontSize: "15px",
                                                                                }}>
                                                                                <span data-custom-class="body_text">
                                                                                    <span
                                                                                        style={{
                                                                                            fontSize: "15px",
                                                                                        }}>
                                                                                        <span data-custom-class="body_text">
                                                                                            <bdt className="block-component" />
                                                                                        </span>
                                                                                    </span>
                                                                                </span>
                                                                            </span>
                                                                        </span>
                                                                    </span>
                                                                </span>
                                                            </span>{" "}
                                                            <span
                                                                style={{
                                                                    color: "rgb(0, 58, 250)",
                                                                }}>
                                                                <bdt className="question">
                                                                    <a
                                                                        data-custom-class="link"
                                                                        href="https://stripe.com/gb/privacy"
                                                                        target="_blank">
                                                                        https://stripe.com/gb/privacy
                                                                    </a>
                                                                </bdt>
                                                            </span>
                                                            <span
                                                                style={{
                                                                    color: "rgb(89, 89, 89)",
                                                                    fontSize: "15px",
                                                                }}>
                                                                <span
                                                                    style={{
                                                                        color: "rgb(89, 89, 89)",
                                                                        fontSize: "15px",
                                                                    }}>
                                                                    <span data-custom-class="body_text">
                                                                        <span
                                                                            style={{
                                                                                color: "rgb(89, 89, 89)",
                                                                                fontSize: "15px",
                                                                            }}>
                                                                            <span
                                                                                style={{
                                                                                    color: "rgb(89, 89, 89)",
                                                                                    fontSize: "15px",
                                                                                }}>
                                                                                <span data-custom-class="body_text">
                                                                                    <span
                                                                                        style={{
                                                                                            color: "rgb(89, 89, 89)",
                                                                                            fontSize: "15px",
                                                                                        }}>
                                                                                        <span
                                                                                            style={{
                                                                                                color: "rgb(89, 89, 89)",
                                                                                                fontSize: "15px",
                                                                                            }}>
                                                                                            <span data-custom-class="body_text">
                                                                                                <span
                                                                                                    style={{
                                                                                                        fontSize: "15px",
                                                                                                    }}>
                                                                                                    <span data-custom-class="body_text">
                                                                                                        <bdt className="block-component" />
                                                                                                    </span>
                                                                                                </span>
                                                                                            </span>
                                                                                        </span>
                                                                                    </span>
                                                                                </span>
                                                                            </span>
                                                                        </span>
                                                                        <bdt className="forloop-component" />
                                                                        <span
                                                                            style={{
                                                                                fontSize: "15px",
                                                                            }}>
                                                                            <span data-custom-class="body_text">
                                                                                .
                                                                                <bdt className="block-component" />
                                                                            </span>
                                                                        </span>
                                                                    </span>
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </div>
                                <div
                                    style={{
                                        lineHeight: "1.5",
                                    }}>
                                    <br />
                                </div>
                                <div
                                    style={{
                                        lineHeight: "1.5",
                                    }}>
                                    <span
                                        style={{
                                            color: "rgb(89, 89, 89)",
                                            fontSize: "15px",
                                        }}>
                                        <span
                                            style={{
                                                color: "rgb(89, 89, 89)",
                                                fontSize: "15px",
                                            }}>
                                            <span data-custom-class="body_text">
                                                <span
                                                    style={{
                                                        fontSize: "15px",
                                                    }}>
                                                    <span data-custom-class="body_text">
                                                        <bdt className="statement-end-if-in-editor">
                                                            <bdt className="block-component" />
                                                        </bdt>
                                                    </span>
                                                </span>
                                            </span>
                                        </span>
                                        <bdt className="block-component" />
                                    </span>
                                </div>
                                <div
                                    style={{
                                        lineHeight: "1.5",
                                    }}>
                                    <span
                                        style={{
                                            color: "rgb(89, 89, 89)",
                                            fontSize: "15px",
                                        }}>
                                        <span
                                            style={{
                                                color: "rgb(89, 89, 89)",
                                                fontSize: "15px",
                                            }}>
                                            <span data-custom-class="body_text">
                                                All personal information that you provide to us must be true,
                                                complete, and accurate, and you must notify us of any changes to
                                                such personal information.
                                            </span>
                                        </span>
                                    </span>
                                </div>
                                <div
                                    style={{
                                        lineHeight: "1.5",
                                    }}>
                                    <span
                                        style={{
                                            color: "rgb(89, 89, 89)",
                                            fontSize: "15px",
                                        }}>
                                        <span
                                            style={{
                                                color: "rgb(89, 89, 89)",
                                                fontSize: "15px",
                                            }}>
                                            <span data-custom-class="body_text">
                                                <bdt className="block-component" />
                                            </span>
                                        </span>
                                    </span>
                                    <span
                                        data-custom-class="heading_2"
                                        style={{
                                            color: "rgb(0, 0, 0)",
                                        }}>
                                        <span
                                            style={{
                                                fontSize: "15px",
                                            }}>
                                            <strong>
                                                <h3>Information automatically collected</h3>
                                            </strong>
                                        </span>
                                    </span>
                                    <span
                                        style={{
                                            color: "rgb(127, 127, 127)",
                                        }}>
                                        <span
                                            style={{
                                                color: "rgb(89, 89, 89)",
                                                fontSize: "15px",
                                            }}>
                                            <span data-custom-class="body_text">
                                                <span
                                                    style={{
                                                        color: "rgb(89, 89, 89)",
                                                        fontSize: "15px",
                                                    }}>
                                                    <span
                                                        style={{
                                                            color: "rgb(89, 89, 89)",
                                                            fontSize: "15px",
                                                        }}>
                                                        <span data-custom-class="body_text">
                                                            <strong>
                                                                <em>In Short:</em>
                                                            </strong>
                                                        </span>
                                                    </span>
                                                </span>
                                            </span>
                                            <span data-custom-class="body_text">
                                                <span
                                                    style={{
                                                        color: "rgb(89, 89, 89)",
                                                        fontSize: "15px",
                                                    }}>
                                                    <span
                                                        style={{
                                                            color: "rgb(89, 89, 89)",
                                                            fontSize: "15px",
                                                        }}>
                                                        <span data-custom-class="body_text">
                                                            <strong>
                                                                <em></em>
                                                            </strong>
                                                            <em>
                                                                Some information — such as your Internet Protocol (IP)
                                                                address and/or browser and device characteristics — is
                                                                collected automatically when you visit our Services.
                                                            </em>
                                                        </span>
                                                    </span>
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </div>
                                <div
                                    style={{
                                        lineHeight: "1.5",
                                    }}>
                                    <br />
                                </div>
                                <div
                                    style={{
                                        lineHeight: "1.5",
                                    }}>
                                    <span
                                        style={{
                                            color: "rgb(89, 89, 89)",
                                            fontSize: "15px",
                                        }}>
                                        <span
                                            style={{
                                                color: "rgb(89, 89, 89)",
                                                fontSize: "15px",
                                            }}>
                                            <span data-custom-class="body_text">
                                                We automatically collect certain information when you visit,
                                                use, or navigate the Services. This information does not reveal
                                                your specific identity (like your name or contact information)
                                                but may include device and usage information, such as your IP
                                                address, browser and device characteristics, operating system,
                                                language preferences, referring URLs, device name, country,
                                                location, information about how and when you use our Services,
                                                and other technical information. This information is primarily
                                                needed to maintain the security and operation of our Services,
                                                and for our internal analytics and reporting purposes.
                                            </span>
                                        </span>
                                    </span>
                                </div>
                                <div
                                    style={{
                                        lineHeight: "1.5",
                                    }}>
                                    <br />
                                </div>
                                <div
                                    style={{
                                        lineHeight: "1.5",
                                    }}>
                                    <span
                                        style={{
                                            color: "rgb(89, 89, 89)",
                                            fontSize: "15px",
                                        }}>
                                        <span
                                            style={{
                                                color: "rgb(89, 89, 89)",
                                                fontSize: "15px",
                                            }}>
                                            <span data-custom-class="body_text">
                                                <bdt className="block-component" />
                                            </span>
                                        </span>
                                        <span data-custom-class="body_text">
                                            <bdt className="block-component" />
                                        </span>
                                    </span>
                                </div>
                                <div
                                    style={{
                                        lineHeight: "1.5",
                                    }}>
                                    <span
                                        style={{
                                            color: "rgb(89, 89, 89)",
                                            fontSize: "15px",
                                        }}>
                                        <span
                                            style={{
                                                color: "rgb(89, 89, 89)",
                                                fontSize: "15px",
                                            }}>
                                            <span data-custom-class="body_text">
                                                The information we collect includes:
                                                <bdt className="block-component" />
                                            </span>
                                        </span>
                                    </span>
                                </div>
                                <ul>
                                    <li
                                        data-custom-class="body_text"
                                        style={{
                                            lineHeight: "1.5",
                                        }}>
                                        <span
                                            style={{
                                                color: "rgb(89, 89, 89)",
                                                fontSize: "15px",
                                            }}>
                                            <span
                                                style={{
                                                    color: "rgb(89, 89, 89)",
                                                    fontSize: "15px",
                                                }}>
                                                <span data-custom-class="body_text">
                                                    <em>Log and Usage Data.</em> Log and usage data is
                                                    service-related, diagnostic, usage, and performance
                                                    information our servers automatically collect when you access
                                                    or use our Services and which we record in log files.
                                                    Depending on how you interact with us, this log data may
                                                    include your IP address, device information, browser type, and
                                                    settings and information about your activity in the Services
                                                    <span
                                                        style={{
                                                            fontSize: "15px",
                                                        }}></span>
                                                    (such as the date/time stamps associated with your usage,
                                                    pages and files viewed, searches, and other actions you take
                                                    such as which features you use), device event information
                                                    (such as system activity, error reports (sometimes called{" "}
                                                    <bdt className="block-component" />
                                                    'crash dumps' <bdt className="else-block" />
                                                    ), and hardware settings).
                                                    <span
                                                        style={{
                                                            fontSize: "15px",
                                                        }}>
                                                        <span
                                                            style={{
                                                                color: "rgb(89, 89, 89)",
                                                            }}>
                                                            <span data-custom-class="body_text">
                                                                <span
                                                                    style={{
                                                                        fontSize: "15px",
                                                                    }}>
                                                                    <span
                                                                        style={{
                                                                            color: "rgb(89, 89, 89)",
                                                                        }}>
                                                                        <bdt className="statement-end-if-in-editor" />
                                                                    </span>
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </span>
                                        </span>
                                    </li>
                                </ul>
                                <div
                                    style={{
                                        lineHeight: "1.5",
                                    }}>
                                    <bdt className="block-component">
                                        <span
                                            style={{
                                                fontSize: "15px",
                                            }}>
                                            <span data-custom-class="body_text" />
                                        </span>
                                    </bdt>
                                </div>
                                <ul>
                                    <li
                                        data-custom-class="body_text"
                                        style={{
                                            lineHeight: "1.5",
                                        }}>
                                        <span
                                            style={{
                                                color: "rgb(89, 89, 89)",
                                                fontSize: "15px",
                                            }}>
                                            <span
                                                style={{
                                                    color: "rgb(89, 89, 89)",
                                                    fontSize: "15px",
                                                }}>
                                                <span data-custom-class="body_text">
                                                    <em>Device Data.</em> We collect device data such as
                                                    information about your computer, phone, tablet, or other
                                                    device you use to access the Services. Depending on the device
                                                    used, this device data may include information such as your IP
                                                    address (or proxy server), device and application
                                                    identification numbers, location, browser type, hardware
                                                    model, Internet service provider and/or mobile carrier,
                                                    operating system, and system configuration information.
                                                    <span
                                                        style={{
                                                            fontSize: "15px",
                                                        }}>
                                                        <span
                                                            style={{
                                                                color: "rgb(89, 89, 89)",
                                                            }}>
                                                            <span data-custom-class="body_text">
                                                                <span
                                                                    style={{
                                                                        fontSize: "15px",
                                                                    }}>
                                                                    <span
                                                                        style={{
                                                                            color: "rgb(89, 89, 89)",
                                                                        }}>
                                                                        <bdt className="statement-end-if-in-editor" />
                                                                    </span>
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </span>
                                        </span>
                                    </li>
                                </ul>
                                <div
                                    style={{
                                        lineHeight: "1.5",
                                    }}>
                                    <bdt className="block-component">
                                        <span
                                            style={{
                                                fontSize: "15px",
                                            }}>
                                            <span data-custom-class="body_text" />
                                        </span>
                                    </bdt>
                                </div>
                                <ul>
                                    <li
                                        data-custom-class="body_text"
                                        style={{
                                            lineHeight: "1.5",
                                        }}>
                                        <span
                                            style={{
                                                color: "rgb(89, 89, 89)",
                                                fontSize: "15px",
                                            }}>
                                            <span
                                                style={{
                                                    color: "rgb(89, 89, 89)",
                                                    fontSize: "15px",
                                                }}>
                                                <span data-custom-class="body_text">
                                                    <em>Location Data.</em> We collect location data such as
                                                    information about your device's location, which can be either
                                                    precise or imprecise. How much information we collect depends
                                                    on the type and settings of the device you use to access the
                                                    Services. For example, we may use GPS and other technologies
                                                    to collect geolocation data that tells us your current
                                                    location (based on your IP address). You can opt out of
                                                    allowing us to collect this information either by refusing
                                                    access to the information or by disabling your Location
                                                    setting on your device. However, if you choose to opt out, you
                                                    may not be able to use certain aspects of the Services.
                                                    <span
                                                        style={{
                                                            fontSize: "15px",
                                                        }}>
                                                        <span
                                                            style={{
                                                                color: "rgb(89, 89, 89)",
                                                            }}>
                                                            <span data-custom-class="body_text">
                                                                <span
                                                                    style={{
                                                                        fontSize: "15px",
                                                                    }}>
                                                                    <span
                                                                        style={{
                                                                            color: "rgb(89, 89, 89)",
                                                                        }}>
                                                                        <bdt className="statement-end-if-in-editor" />
                                                                    </span>
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </span>
                                        </span>
                                    </li>
                                </ul>
                                <div>
                                    <bdt className="block-component">
                                        <span
                                            style={{
                                                fontSize: "15px",
                                            }}
                                        />
                                    </bdt>
                                    <bdt className="statement-end-if-in-editor" />
                                    <bdt className="block-component">
                                        <span
                                            style={{
                                                fontSize: "15px",
                                            }}
                                        />
                                    </bdt>
                                    <span
                                        style={{
                                            color: "rgb(89, 89, 89)",
                                            fontSize: "15px",
                                        }}>
                                        <span
                                            style={{
                                                color: "rgb(89, 89, 89)",
                                                fontSize: "15px",
                                            }}>
                                            <span data-custom-class="body_text">
                                                <span
                                                    style={{
                                                        color: "rgb(89, 89, 89)",
                                                        fontSize: "15px",
                                                    }}>
                                                    <span data-custom-class="body_text">
                                                        <span
                                                            style={{
                                                                color: "rgb(89, 89, 89)",
                                                                fontSize: "15px",
                                                            }}>
                                                            <span data-custom-class="body_text">
                                                                <bdt className="statement-end-if-in-editor">
                                                                    <bdt className="block-component" />
                                                                </bdt>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                    <span
                                        style={{
                                            fontSize: "15px",
                                        }}>
                                        <span data-custom-class="body_text">
                                            <bdt className="block-component" />
                                        </span>
                                    </span>
                                </div>
                                <div
                                    style={{
                                        lineHeight: "1.5",
                                    }}>
                                    <br />
                                </div>
                                <div
                                    id="infouse"
                                    style={{
                                        lineHeight: "1.5",
                                    }}>
                                    <span
                                        style={{
                                            color: "rgb(127, 127, 127)",
                                        }}>
                                        <span
                                            style={{
                                                color: "rgb(89, 89, 89)",
                                                fontSize: "15px",
                                            }}>
                                            <span
                                                style={{
                                                    color: "rgb(89, 89, 89)",
                                                    fontSize: "15px",
                                                }}>
                                                <span
                                                    style={{
                                                        color: "rgb(89, 89, 89)",
                                                        fontSize: "15px",
                                                    }}>
                                                    <span
                                                        id="control"
                                                        style={{
                                                            color: "rgb(0, 0, 0)",
                                                        }}>
                                                        <strong>
                                                            <span data-custom-class="heading_1">
                                                                <h2>2. HOW DO WE PROCESS YOUR INFORMATION?</h2>
                                                            </span>
                                                        </strong>
                                                    </span>
                                                </span>
                                            </span>
                                        </span>
                                        <span
                                            style={{
                                                color: "rgb(89, 89, 89)",
                                                fontSize: "15px",
                                            }}>
                                            <span data-custom-class="body_text">
                                                <span
                                                    style={{
                                                        color: "rgb(89, 89, 89)",
                                                        fontSize: "15px",
                                                    }}>
                                                    <span
                                                        style={{
                                                            color: "rgb(89, 89, 89)",
                                                            fontSize: "15px",
                                                        }}>
                                                        <span data-custom-class="body_text">
                                                            <strong>
                                                                <em>In Short: </em>
                                                            </strong>
                                                            <em>
                                                                We process your information to provide, improve, and
                                                                administer our Services, communicate with you, for
                                                                security and fraud prevention, and to comply with law.
                                                                We may also process your information for other purposes
                                                                with your consent.
                                                            </em>
                                                        </span>
                                                    </span>
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </div>
                                <div
                                    style={{
                                        lineHeight: "1.5",
                                    }}>
                                    <br />
                                </div>
                                <div
                                    style={{
                                        lineHeight: "1.5",
                                    }}>
                                    <span
                                        style={{
                                            color: "rgb(89, 89, 89)",
                                            fontSize: "15px",
                                        }}>
                                        <span
                                            style={{
                                                color: "rgb(89, 89, 89)",
                                                fontSize: "15px",
                                            }}>
                                            <span data-custom-class="body_text">
                                                <strong>
                                                    We process your personal information for a variety of reasons,
                                                    depending on how you interact with our Services, including:
                                                </strong>
                                                <bdt className="block-component" />
                                            </span>
                                        </span>
                                    </span>
                                    <div
                                        style={{
                                            lineHeight: "1.5",
                                        }}>
                                        <span
                                            style={{
                                                color: "rgb(89, 89, 89)",
                                                fontSize: "15px",
                                            }}>
                                            <span
                                                style={{
                                                    color: "rgb(89, 89, 89)",
                                                    fontSize: "15px",
                                                }}>
                                                <span data-custom-class="body_text">
                                                    <bdt className="block-component" />
                                                </span>
                                            </span>
                                        </span>
                                        <div
                                            style={{
                                                lineHeight: "1.5",
                                            }}>
                                            <span
                                                style={{
                                                    color: "rgb(89, 89, 89)",
                                                    fontSize: "15px",
                                                }}>
                                                <span
                                                    style={{
                                                        color: "rgb(89, 89, 89)",
                                                        fontSize: "15px",
                                                    }}>
                                                    <span data-custom-class="body_text">
                                                        <bdt className="block-component" />
                                                    </span>
                                                </span>
                                            </span>
                                        </div>
                                        <ul>
                                            <li
                                                data-custom-class="body_text"
                                                style={{
                                                    lineHeight: "1.5",
                                                }}>
                                                <span
                                                    style={{
                                                        color: "rgb(89, 89, 89)",
                                                        fontSize: "15px",
                                                    }}>
                                                    <span
                                                        style={{
                                                            color: "rgb(89, 89, 89)",
                                                            fontSize: "15px",
                                                        }}>
                                                        <span data-custom-class="body_text">
                                                            <strong>
                                                                To deliver and facilitate delivery of services to the
                                                                user.
                                                            </strong>
                                                            We may process your information to provide you with the
                                                            requested service.
                                                            <span
                                                                style={{
                                                                    fontSize: "15px",
                                                                }}>
                                                                <span
                                                                    style={{
                                                                        color: "rgb(89, 89, 89)",
                                                                    }}>
                                                                    <span data-custom-class="body_text">
                                                                        <span
                                                                            style={{
                                                                                color: "rgb(89, 89, 89)",
                                                                                fontSize: "15px",
                                                                            }}>
                                                                            <span
                                                                                style={{
                                                                                    color: "rgb(89, 89, 89)",
                                                                                    fontSize: "15px",
                                                                                }}>
                                                                                <span data-custom-class="body_text">
                                                                                    <span
                                                                                        style={{
                                                                                            color: "rgb(89, 89, 89)",
                                                                                            fontSize: "15px",
                                                                                        }}>
                                                                                        <span
                                                                                            style={{
                                                                                                color: "rgb(89, 89, 89)",
                                                                                                fontSize: "15px",
                                                                                            }}>
                                                                                            <span data-custom-class="body_text">
                                                                                                <span
                                                                                                    style={{
                                                                                                        color: "rgb(89, 89, 89)",
                                                                                                        fontSize: "15px",
                                                                                                    }}>
                                                                                                    <span
                                                                                                        style={{
                                                                                                            color: "rgb(89, 89, 89)",
                                                                                                            fontSize: "15px",
                                                                                                        }}>
                                                                                                        <span data-custom-class="body_text">
                                                                                                            <span
                                                                                                                style={{
                                                                                                                    fontSize: "15px",
                                                                                                                }}>
                                                                                                                <span
                                                                                                                    style={{
                                                                                                                        color: "rgb(89, 89, 89)",
                                                                                                                    }}>
                                                                                                                    <span data-custom-class="body_text">
                                                                                                                        <span
                                                                                                                            style={{
                                                                                                                                fontSize: "15px",
                                                                                                                            }}>
                                                                                                                            <span
                                                                                                                                style={{
                                                                                                                                    color:
                                                                                                                                        "rgb(89, 89, 89)",
                                                                                                                                }}>
                                                                                                                                <span data-custom-class="body_text">
                                                                                                                                    <bdt className="statement-end-if-in-editor" />
                                                                                                                                </span>
                                                                                                                            </span>
                                                                                                                        </span>
                                                                                                                    </span>
                                                                                                                </span>
                                                                                                            </span>
                                                                                                        </span>
                                                                                                    </span>
                                                                                                </span>
                                                                                            </span>
                                                                                        </span>
                                                                                    </span>
                                                                                </span>
                                                                            </span>
                                                                        </span>
                                                                    </span>
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </li>
                                        </ul>
                                        <div
                                            style={{
                                                lineHeight: "1.5",
                                            }}>
                                            <span
                                                style={{
                                                    color: "rgb(89, 89, 89)",
                                                    fontSize: "15px",
                                                }}>
                                                <span
                                                    style={{
                                                        color: "rgb(89, 89, 89)",
                                                        fontSize: "15px",
                                                    }}>
                                                    <span data-custom-class="body_text">
                                                        <bdt className="block-component" />
                                                    </span>
                                                </span>
                                            </span>
                                            <div
                                                style={{
                                                    lineHeight: "1.5",
                                                }}>
                                                <span
                                                    style={{
                                                        color: "rgb(89, 89, 89)",
                                                        fontSize: "15px",
                                                    }}>
                                                    <span
                                                        style={{
                                                            color: "rgb(89, 89, 89)",
                                                            fontSize: "15px",
                                                        }}>
                                                        <span data-custom-class="body_text">
                                                            <bdt className="block-component" />
                                                        </span>
                                                    </span>
                                                </span>
                                            </div>
                                            <ul>
                                                <li
                                                    data-custom-class="body_text"
                                                    style={{
                                                        lineHeight: "1.5",
                                                    }}>
                                                    <span
                                                        style={{
                                                            color: "rgb(89, 89, 89)",
                                                            fontSize: "15px",
                                                        }}>
                                                        <span
                                                            style={{
                                                                color: "rgb(89, 89, 89)",
                                                                fontSize: "15px",
                                                            }}>
                                                            <span data-custom-class="body_text">
                                                                <strong>
                                                                    To respond to user inquiries/offer support to users.
                                                                </strong>
                                                                We may process your information to respond to your
                                                                inquiries and solve any potential issues you might have
                                                                with the requested service.
                                                                <bdt className="statement-end-if-in-editor" />
                                                            </span>
                                                        </span>
                                                    </span>
                                                </li>
                                            </ul>
                                            <div
                                                style={{
                                                    lineHeight: "1.5",
                                                }}>
                                                <bdt className="block-component">
                                                    <span
                                                        style={{
                                                            fontSize: "15px",
                                                        }}
                                                    />
                                                </bdt>
                                                <div
                                                    style={{
                                                        lineHeight: "1.5",
                                                    }}>
                                                    <bdt className="block-component">
                                                        <span
                                                            style={{
                                                                fontSize: "15px",
                                                            }}
                                                        />
                                                    </bdt>
                                                </div>
                                                <ul>
                                                    <li
                                                        data-custom-class="body_text"
                                                        style={{
                                                            lineHeight: "1.5",
                                                        }}>
                                                        <span
                                                            style={{
                                                                color: "rgb(89, 89, 89)",
                                                                fontSize: "15px",
                                                            }}>
                                                            <span
                                                                style={{
                                                                    color: "rgb(89, 89, 89)",
                                                                    fontSize: "15px",
                                                                }}>
                                                                <span data-custom-class="body_text">
                                                                    <strong>
                                                                        To send administrative information to you.
                                                                    </strong>
                                                                    We may process your information to send you details
                                                                    about our products and services, changes to our terms
                                                                    and policies, and other similar information.
                                                                    <span
                                                                        style={{
                                                                            color: "rgb(89, 89, 89)",
                                                                            fontSize: "15px",
                                                                        }}>
                                                                        <span
                                                                            style={{
                                                                                color: "rgb(89, 89, 89)",
                                                                                fontSize: "15px",
                                                                            }}>
                                                                            <span data-custom-class="body_text">
                                                                                <span
                                                                                    style={{
                                                                                        color: "rgb(89, 89, 89)",
                                                                                        fontSize: "15px",
                                                                                    }}>
                                                                                    <span
                                                                                        style={{
                                                                                            color: "rgb(89, 89, 89)",
                                                                                            fontSize: "15px",
                                                                                        }}>
                                                                                        <span data-custom-class="body_text">
                                                                                            <bdt className="statement-end-if-in-editor" />
                                                                                        </span>
                                                                                    </span>
                                                                                </span>
                                                                            </span>
                                                                        </span>
                                                                    </span>
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </li>
                                                </ul>
                                                <div
                                                    style={{
                                                        lineHeight: "1.5",
                                                    }}>
                                                    <bdt className="block-component">
                                                        <span
                                                            style={{
                                                                fontSize: "15px",
                                                            }}
                                                        />
                                                    </bdt>
                                                    <div
                                                        style={{
                                                            lineHeight: "1.5",
                                                        }}>
                                                        <bdt className="block-component">
                                                            <span
                                                                style={{
                                                                    fontSize: "15px",
                                                                }}>
                                                                <span data-custom-class="body_text" />
                                                            </span>
                                                        </bdt>
                                                    </div>
                                                    <ul>
                                                        <li
                                                            data-custom-class="body_text"
                                                            style={{
                                                                lineHeight: "1.5",
                                                            }}>
                                                            <span data-custom-class="body_text">
                                                                <span
                                                                    style={{
                                                                        fontSize: "15px",
                                                                    }}>
                                                                    <strong>
                                                                        To <bdt className="block-component" />
                                                                        fulfil
                                                                        <bdt className="else-block" /> and manage your
                                                                        orders.
                                                                    </strong>{" "}
                                                                    We may process your information to{" "}
                                                                    <bdt className="block-component" />
                                                                    fulfil
                                                                    <bdt className="else-block" /> and manage your orders,
                                                                    payments, returns, and exchanges made through the
                                                                    Services.
                                                                </span>
                                                            </span>
                                                            <bdt className="statement-end-if-in-editor">
                                                                <span
                                                                    style={{
                                                                        fontSize: "15px",
                                                                    }}>
                                                                    <span data-custom-class="body_text" />
                                                                </span>
                                                            </bdt>
                                                        </li>
                                                    </ul>
                                                    <p
                                                        style={{
                                                            fontSize: "15px",
                                                            lineHeight: "1.5",
                                                        }}>
                                                        <bdt className="block-component">
                                                            <span
                                                                style={{
                                                                    fontSize: "15px",
                                                                }}
                                                            />
                                                        </bdt>
                                                    </p>
                                                    <p
                                                        style={{
                                                            fontSize: "15px",
                                                            lineHeight: "1.5",
                                                        }}>
                                                        <bdt className="block-component">
                                                            <span
                                                                style={{
                                                                    fontSize: "15px",
                                                                }}
                                                            />
                                                        </bdt>
                                                    </p>
                                                    <ul>
                                                        <li
                                                            data-custom-class="body_text"
                                                            style={{
                                                                lineHeight: "1.5",
                                                            }}>
                                                            <span
                                                                style={{
                                                                    fontSize: "15px",
                                                                }}>
                                                                <span
                                                                    style={{
                                                                        color: "rgb(89, 89, 89)",
                                                                    }}>
                                                                    <span
                                                                        style={{
                                                                            color: "rgb(89, 89, 89)",
                                                                        }}>
                                                                        <span data-custom-class="body_text">
                                                                            <strong>
                                                                                To enable user-to-user communications.
                                                                            </strong>
                                                                            We may process your information if you choose to
                                                                            use any of our offerings that allow for
                                                                            communication with another user.
                                                                            <span
                                                                                style={{
                                                                                    color: "rgb(89, 89, 89)",
                                                                                }}>
                                                                                <span
                                                                                    style={{
                                                                                        color: "rgb(89, 89, 89)",
                                                                                    }}>
                                                                                    <span data-custom-class="body_text">
                                                                                        <span
                                                                                            style={{
                                                                                                color: "rgb(89, 89, 89)",
                                                                                            }}>
                                                                                            <span data-custom-class="body_text">
                                                                                                <span
                                                                                                    style={{
                                                                                                        color: "rgb(89, 89, 89)",
                                                                                                    }}>
                                                                                                    <span data-custom-class="body_text">
                                                                                                        <bdt className="statement-end-if-in-editor" />
                                                                                                    </span>
                                                                                                </span>
                                                                                            </span>
                                                                                        </span>
                                                                                    </span>
                                                                                </span>
                                                                            </span>
                                                                        </span>
                                                                    </span>
                                                                </span>
                                                            </span>
                                                        </li>
                                                    </ul>
                                                    <p
                                                        style={{
                                                            fontSize: "15px",
                                                            lineHeight: "1.5",
                                                        }}>
                                                        <bdt className="block-component" />
                                                    </p>
                                                    <p
                                                        style={{
                                                            fontSize: "15px",
                                                            lineHeight: "1.5",
                                                        }}>
                                                        <bdt className="block-component" />
                                                    </p>
                                                    <ul>
                                                        <li
                                                            data-custom-class="body_text"
                                                            style={{
                                                                lineHeight: "1.5",
                                                            }}>
                                                            <span
                                                                style={{
                                                                    fontSize: "15px",
                                                                }}>
                                                                <span
                                                                    style={{
                                                                        color: "rgb(89, 89, 89)",
                                                                    }}>
                                                                    <span
                                                                        style={{
                                                                            color: "rgb(89, 89, 89)",
                                                                        }}>
                                                                        <span data-custom-class="body_text">
                                                                            <strong>To request feedback. </strong>
                                                                            We may process your information when necessary to
                                                                            request feedback and to contact you about your use
                                                                            of our Services.
                                                                            <span
                                                                                style={{
                                                                                    color: "rgb(89, 89, 89)",
                                                                                }}>
                                                                                <span
                                                                                    style={{
                                                                                        color: "rgb(89, 89, 89)",
                                                                                    }}>
                                                                                    <span data-custom-class="body_text">
                                                                                        <span
                                                                                            style={{
                                                                                                color: "rgb(89, 89, 89)",
                                                                                            }}>
                                                                                            <span data-custom-class="body_text">
                                                                                                <span
                                                                                                    style={{
                                                                                                        color: "rgb(89, 89, 89)",
                                                                                                    }}>
                                                                                                    <span data-custom-class="body_text">
                                                                                                        <bdt className="statement-end-if-in-editor" />
                                                                                                    </span>
                                                                                                </span>
                                                                                            </span>
                                                                                        </span>
                                                                                    </span>
                                                                                </span>
                                                                            </span>
                                                                        </span>
                                                                    </span>
                                                                </span>
                                                            </span>
                                                        </li>
                                                    </ul>
                                                    <div
                                                        style={{
                                                            lineHeight: "1.5",
                                                        }}>
                                                        <bdt className="block-component">
                                                            <span
                                                                style={{
                                                                    fontSize: "15px",
                                                                }}>
                                                                <span data-custom-class="body_text" />
                                                            </span>
                                                        </bdt>
                                                        <div
                                                            style={{
                                                                lineHeight: "1.5",
                                                            }}>
                                                            <bdt className="block-component">
                                                                <span
                                                                    style={{
                                                                        fontSize: "15px",
                                                                    }}
                                                                />
                                                            </bdt>
                                                            <div
                                                                style={{
                                                                    lineHeight: "1.5",
                                                                }}>
                                                                <bdt className="block-component">
                                                                    <span
                                                                        style={{
                                                                            fontSize: "15px",
                                                                        }}
                                                                    />
                                                                </bdt>
                                                                <div
                                                                    style={{
                                                                        lineHeight: "1.5",
                                                                    }}>
                                                                    <span
                                                                        style={{
                                                                            fontSize: "15px",
                                                                        }}>
                                                                        <bdt className="block-component">
                                                                            <span data-custom-class="body_text" />
                                                                        </bdt>
                                                                    </span>
                                                                    <div
                                                                        style={{
                                                                            lineHeight: "1.5",
                                                                        }}>
                                                                        <bdt className="block-component">
                                                                            <span
                                                                                style={{
                                                                                    fontSize: "15px",
                                                                                }}>
                                                                                <span data-custom-class="body_text" />
                                                                            </span>
                                                                        </bdt>
                                                                        <div
                                                                            style={{
                                                                                lineHeight: "1.5",
                                                                            }}>
                                                                            <bdt className="block-component">
                                                                                <span
                                                                                    style={{
                                                                                        fontSize: "15px",
                                                                                    }}>
                                                                                    <span data-custom-class="body_text" />
                                                                                </span>
                                                                            </bdt>
                                                                            <div
                                                                                style={{
                                                                                    lineHeight: "1.5",
                                                                                }}>
                                                                                <bdt className="block-component">
                                                                                    <span
                                                                                        style={{
                                                                                            fontSize: "15px",
                                                                                        }}>
                                                                                        <span data-custom-class="body_text" />
                                                                                    </span>
                                                                                </bdt>
                                                                            </div>
                                                                            <ul>
                                                                                <li
                                                                                    data-custom-class="body_text"
                                                                                    style={{
                                                                                        lineHeight: "1.5",
                                                                                    }}>
                                                                                    <span data-custom-class="body_text">
                                                                                        <span
                                                                                            style={{
                                                                                                fontSize: "15px",
                                                                                            }}>
                                                                                            <strong>To protect our Services.</strong>{" "}
                                                                                            We may process your information as part of
                                                                                            our efforts to keep our Services safe and
                                                                                            secure, including fraud monitoring and
                                                                                            prevention.
                                                                                        </span>
                                                                                    </span>
                                                                                    <bdt className="statement-end-if-in-editor">
                                                                                        <span
                                                                                            style={{
                                                                                                fontSize: "15px",
                                                                                            }}>
                                                                                            <span data-custom-class="body_text" />
                                                                                        </span>
                                                                                    </bdt>
                                                                                </li>
                                                                            </ul>
                                                                            <div
                                                                                style={{
                                                                                    lineHeight: "1.5",
                                                                                }}>
                                                                                <bdt className="block-component">
                                                                                    <span
                                                                                        style={{
                                                                                            fontSize: "15px",
                                                                                        }}>
                                                                                        <span data-custom-class="body_text" />
                                                                                    </span>
                                                                                </bdt>
                                                                                <div
                                                                                    style={{
                                                                                        lineHeight: "1.5",
                                                                                    }}>
                                                                                    <bdt className="block-component">
                                                                                        <span
                                                                                            style={{
                                                                                                fontSize: "15px",
                                                                                            }}>
                                                                                            <span data-custom-class="body_text" />
                                                                                        </span>
                                                                                    </bdt>
                                                                                    <div
                                                                                        style={{
                                                                                            lineHeight: "1.5",
                                                                                        }}>
                                                                                        <bdt className="block-component">
                                                                                            <span
                                                                                                style={{
                                                                                                    fontSize: "15px",
                                                                                                }}>
                                                                                                <span data-custom-class="body_text" />
                                                                                            </span>
                                                                                        </bdt>
                                                                                        <div
                                                                                            style={{
                                                                                                lineHeight: "1.5",
                                                                                            }}>
                                                                                            <bdt className="block-component">
                                                                                                <span
                                                                                                    style={{
                                                                                                        fontSize: "15px",
                                                                                                    }}>
                                                                                                    <span data-custom-class="body_text" />
                                                                                                </span>
                                                                                            </bdt>
                                                                                        </div>
                                                                                        <ul>
                                                                                            <li
                                                                                                data-custom-class="body_text"
                                                                                                style={{
                                                                                                    lineHeight: "1.5",
                                                                                                }}>
                                                                                                <span data-custom-class="body_text">
                                                                                                    <span
                                                                                                        style={{
                                                                                                            fontSize: "15px",
                                                                                                        }}>
                                                                                                        <strong>
                                                                                                            To identify usage trends.
                                                                                                        </strong>{" "}
                                                                                                        We may process information about how
                                                                                                        you use our Services to better
                                                                                                        understand how they are being used
                                                                                                        so we can improve them.
                                                                                                    </span>
                                                                                                </span>
                                                                                                <bdt className="statement-end-if-in-editor">
                                                                                                    <span
                                                                                                        style={{
                                                                                                            fontSize: "15px",
                                                                                                        }}>
                                                                                                        <span data-custom-class="body_text" />
                                                                                                    </span>
                                                                                                </bdt>
                                                                                            </li>
                                                                                        </ul>
                                                                                        <div
                                                                                            style={{
                                                                                                lineHeight: "1.5",
                                                                                            }}>
                                                                                            <bdt className="block-component">
                                                                                                <span
                                                                                                    style={{
                                                                                                        fontSize: "15px",
                                                                                                    }}>
                                                                                                    <span data-custom-class="body_text" />
                                                                                                </span>
                                                                                            </bdt>
                                                                                            <div
                                                                                                style={{
                                                                                                    lineHeight: "1.5",
                                                                                                }}>
                                                                                                <bdt className="block-component">
                                                                                                    <span
                                                                                                        style={{
                                                                                                            fontSize: "15px",
                                                                                                        }}>
                                                                                                        <span data-custom-class="body_text" />
                                                                                                    </span>
                                                                                                </bdt>
                                                                                                <div
                                                                                                    style={{
                                                                                                        lineHeight: "1.5",
                                                                                                    }}>
                                                                                                    <bdt className="block-component">
                                                                                                        <span
                                                                                                            style={{
                                                                                                                fontSize: "15px",
                                                                                                            }}>
                                                                                                            <span data-custom-class="body_text" />
                                                                                                        </span>
                                                                                                    </bdt>
                                                                                                    <div
                                                                                                        style={{
                                                                                                            lineHeight: "1.5",
                                                                                                        }}>
                                                                                                        <bdt className="block-component">
                                                                                                            <span
                                                                                                                style={{
                                                                                                                    fontSize: "15px",
                                                                                                                }}>
                                                                                                                <span data-custom-class="body_text" />
                                                                                                            </span>
                                                                                                        </bdt>
                                                                                                    </div>
                                                                                                    <ul>
                                                                                                        <li
                                                                                                            data-custom-class="body_text"
                                                                                                            style={{
                                                                                                                lineHeight: "1.5",
                                                                                                            }}>
                                                                                                            <span data-custom-class="body_text">
                                                                                                                <span
                                                                                                                    style={{
                                                                                                                        fontSize: "15px",
                                                                                                                    }}>
                                                                                                                    <strong>
                                                                                                                        To save or protect an
                                                                                                                        individual's vital interest.
                                                                                                                    </strong>{" "}
                                                                                                                    We may process your
                                                                                                                    information when necessary to
                                                                                                                    save or protect an
                                                                                                                    individual’s vital interest,
                                                                                                                    such as to prevent harm.
                                                                                                                </span>
                                                                                                            </span>
                                                                                                            <bdt className="statement-end-if-in-editor">
                                                                                                                <span
                                                                                                                    style={{
                                                                                                                        fontSize: "15px",
                                                                                                                    }}>
                                                                                                                    <span data-custom-class="body_text" />
                                                                                                                </span>
                                                                                                            </bdt>
                                                                                                        </li>
                                                                                                    </ul>
                                                                                                    <div
                                                                                                        style={{
                                                                                                            lineHeight: "1.5",
                                                                                                        }}>
                                                                                                        <bdt className="block-component">
                                                                                                            <span
                                                                                                                style={{
                                                                                                                    fontSize: "15px",
                                                                                                                }}>
                                                                                                                <span data-custom-class="body_text" />
                                                                                                            </span>
                                                                                                        </bdt>
                                                                                                        <bdt className="block-component">
                                                                                                            <span
                                                                                                                style={{
                                                                                                                    fontSize: "15px",
                                                                                                                }}>
                                                                                                                <span data-custom-class="body_text" />
                                                                                                            </span>
                                                                                                        </bdt>
                                                                                                        <bdt className="block-component">
                                                                                                            <span
                                                                                                                style={{
                                                                                                                    fontSize: "15px",
                                                                                                                }}>
                                                                                                                <span data-custom-class="body_text" />
                                                                                                            </span>
                                                                                                        </bdt>
                                                                                                        <bdt className="block-component">
                                                                                                            <span
                                                                                                                style={{
                                                                                                                    fontSize: "15px",
                                                                                                                }}>
                                                                                                                <span data-custom-class="body_text" />
                                                                                                            </span>
                                                                                                        </bdt>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        style={{
                                                                                                            lineHeight: "1.5",
                                                                                                        }}>
                                                                                                        <br />
                                                                                                    </div>
                                                                                                    <div
                                                                                                        id="legalbases"
                                                                                                        style={{
                                                                                                            lineHeight: "1.5",
                                                                                                        }}>
                                                                                                        <strong>
                                                                                                            <span
                                                                                                                style={{
                                                                                                                    fontSize: "15px",
                                                                                                                }}>
                                                                                                                <span data-custom-class="heading_1">
                                                                                                                    <h2>
                                                                                                                        3. WHAT LEGAL BASES DO WE
                                                                                                                        RELY ON TO PROCESS YOUR
                                                                                                                        INFORMATION?
                                                                                                                    </h2>
                                                                                                                </span>
                                                                                                            </span>
                                                                                                        </strong>
                                                                                                        <em>
                                                                                                            <span
                                                                                                                style={{
                                                                                                                    fontSize: "15px",
                                                                                                                }}>
                                                                                                                <span data-custom-class="body_text">
                                                                                                                    <strong>In Short: </strong>
                                                                                                                    We only process your personal
                                                                                                                    information when we believe it
                                                                                                                    is necessary and we have a
                                                                                                                    valid legal reason (i.e.
                                                                                                                    <bdt className="block-component" />{" "}
                                                                                                                    legal basis) to do so under
                                                                                                                    applicable law, like with your
                                                                                                                    consent, to comply with laws,
                                                                                                                    to provide you with services
                                                                                                                    to enter into or{" "}
                                                                                                                    <bdt className="block-component" />
                                                                                                                    fulfil
                                                                                                                    <bdt className="else-block" />{" "}
                                                                                                                    our contractual obligations,
                                                                                                                    to protect your rights, or to{" "}
                                                                                                                    <bdt className="block-component" />
                                                                                                                    fulfil
                                                                                                                    <bdt className="else-block" />{" "}
                                                                                                                    our legitimate business
                                                                                                                    interests.
                                                                                                                </span>
                                                                                                            </span>
                                                                                                        </em>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        style={{
                                                                                                            lineHeight: "1.5",
                                                                                                        }}>
                                                                                                        <span
                                                                                                            style={{
                                                                                                                fontSize: "15px",
                                                                                                            }}>
                                                                                                            <span data-custom-class="body_text">
                                                                                                                <bdt className="block-component" />
                                                                                                            </span>
                                                                                                            <span data-custom-class="body_text">
                                                                                                                <bdt className="block-component" />
                                                                                                            </span>
                                                                                                        </span>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        style={{
                                                                                                            lineHeight: "1.5",
                                                                                                        }}>
                                                                                                        <span
                                                                                                            style={{
                                                                                                                fontSize: "15px",
                                                                                                            }}>
                                                                                                            <span data-custom-class="body_text">
                                                                                                                The General Data Protection
                                                                                                                Regulation (GDPR) and UK GDPR
                                                                                                                require us to explain the valid
                                                                                                                legal bases we rely on in order
                                                                                                                to process your personal
                                                                                                                information. As such, we may
                                                                                                                rely on the following legal
                                                                                                                bases to process your personal
                                                                                                                information:
                                                                                                            </span>
                                                                                                        </span>
                                                                                                    </div>
                                                                                                    <ul>
                                                                                                        <li
                                                                                                            data-custom-class="body_text"
                                                                                                            style={{
                                                                                                                lineHeight: "1.5",
                                                                                                            }}>
                                                                                                            <span
                                                                                                                style={{
                                                                                                                    fontSize: "15px",
                                                                                                                }}>
                                                                                                                <span data-custom-class="body_text">
                                                                                                                    <strong>Consent. </strong>
                                                                                                                    We may process your
                                                                                                                    information if you have given
                                                                                                                    us permission (i.e.
                                                                                                                    <bdt className="block-component" />{" "}
                                                                                                                    consent) to use your personal
                                                                                                                    information for a specific
                                                                                                                    purpose. You can withdraw your
                                                                                                                    consent at any time. Learn
                                                                                                                    more about
                                                                                                                </span>
                                                                                                            </span>
                                                                                                            <a
                                                                                                                data-custom-class="link"
                                                                                                                href="#withdrawconsent">
                                                                                                                <span
                                                                                                                    style={{
                                                                                                                        color: "rgb(0, 58, 250)",
                                                                                                                        fontSize: "15px",
                                                                                                                    }}>
                                                                                                                    <span data-custom-class="body_text"><strong><em> withdrawing your consent</em></strong></span>
                                                                                                                </span>
                                                                                                            </a>
                                                                                                            <span data-custom-class="body_text">
                                                                                                                .
                                                                                                            </span>
                                                                                                        </li>
                                                                                                    </ul>
                                                                                                    <div
                                                                                                        style={{
                                                                                                            lineHeight: "1.5",
                                                                                                        }}>
                                                                                                        <bdt className="block-component">
                                                                                                            <span
                                                                                                                style={{
                                                                                                                    fontSize: "15px",
                                                                                                                }}>
                                                                                                                <span data-custom-class="body_text" />
                                                                                                            </span>
                                                                                                        </bdt>
                                                                                                    </div>
                                                                                                    <ul>
                                                                                                        <li
                                                                                                            data-custom-class="body_text"
                                                                                                            style={{
                                                                                                                lineHeight: "1.5",
                                                                                                            }}>
                                                                                                            <span data-custom-class="body_text">
                                                                                                                <span
                                                                                                                    style={{
                                                                                                                        fontSize: "15px",
                                                                                                                    }}>
                                                                                                                    <strong>
                                                                                                                        Performance of a Contract.
                                                                                                                    </strong>{" "}
                                                                                                                    We may process your personal
                                                                                                                    information when we believe it
                                                                                                                    is necessary to{" "}
                                                                                                                    <bdt className="block-component" />
                                                                                                                    fulfil
                                                                                                                    <bdt className="else-block" />{" "}
                                                                                                                    our contractual obligations to
                                                                                                                    you, including providing our
                                                                                                                    Services or at your request
                                                                                                                    prior to entering into a
                                                                                                                    contract with you.
                                                                                                                </span>
                                                                                                            </span>
                                                                                                            <bdt className="statement-end-if-in-editor">
                                                                                                                <span
                                                                                                                    style={{
                                                                                                                        fontSize: "15px",
                                                                                                                    }}>
                                                                                                                    <span data-custom-class="body_text" />
                                                                                                                </span>
                                                                                                            </bdt>
                                                                                                        </li>
                                                                                                    </ul>
                                                                                                    <div
                                                                                                        style={{
                                                                                                            lineHeight: "1.5",
                                                                                                        }}>
                                                                                                        <bdt className="block-component">
                                                                                                            <span
                                                                                                                style={{
                                                                                                                    fontSize: "15px",
                                                                                                                }}>
                                                                                                                <span data-custom-class="body_text" />
                                                                                                            </span>
                                                                                                        </bdt>
                                                                                                    </div>
                                                                                                    <ul>
                                                                                                        <li
                                                                                                            data-custom-class="body_text"
                                                                                                            style={{
                                                                                                                lineHeight: "1.5",
                                                                                                            }}>
                                                                                                            <span data-custom-class="body_text">
                                                                                                                <span
                                                                                                                    style={{
                                                                                                                        fontSize: "15px",
                                                                                                                    }}>
                                                                                                                    <strong>
                                                                                                                        Legitimate Interests.
                                                                                                                    </strong>{" "}
                                                                                                                    We may process your
                                                                                                                    information when we believe it
                                                                                                                    is reasonably necessary to
                                                                                                                    achieve our legitimate
                                                                                                                    business interests and those
                                                                                                                    interests do not outweigh your
                                                                                                                    interests and fundamental
                                                                                                                    rights and freedoms. For
                                                                                                                    example, we may process your
                                                                                                                    personal information for some
                                                                                                                    of the purposes described in
                                                                                                                    order to:
                                                                                                                </span>
                                                                                                            </span>
                                                                                                        </li>
                                                                                                    </ul>
                                                                                                    <div
                                                                                                        style={{
                                                                                                            lineHeight: "1.5",
                                                                                                        }}>
                                                                                                        <span data-custom-class="body_text">
                                                                                                            <span
                                                                                                                style={{
                                                                                                                    fontSize: "15px",
                                                                                                                }}>
                                                                                                                <bdt className="block-component" />
                                                                                                            </span>
                                                                                                        </span>
                                                                                                        <div
                                                                                                            style={{
                                                                                                                lineHeight: "1.5",
                                                                                                            }}>
                                                                                                            <span data-custom-class="body_text">
                                                                                                                <span
                                                                                                                    style={{
                                                                                                                        fontSize: "15px",
                                                                                                                    }}>
                                                                                                                    <bdt className="block-component" />
                                                                                                                </span>
                                                                                                            </span>
                                                                                                            <div
                                                                                                                style={{
                                                                                                                    lineHeight: "1.5",
                                                                                                                }}>
                                                                                                                <span data-custom-class="body_text">
                                                                                                                    <span
                                                                                                                        style={{
                                                                                                                            fontSize: "15px",
                                                                                                                        }}>
                                                                                                                        <bdt className="block-component" />
                                                                                                                    </span>
                                                                                                                </span>
                                                                                                            </div>
                                                                                                            <ul
                                                                                                                style={{
                                                                                                                    marginLeft: "40px",
                                                                                                                }}>
                                                                                                                <li
                                                                                                                    data-custom-class="body_text"
                                                                                                                    style={{
                                                                                                                        lineHeight: "1.5",
                                                                                                                    }}>
                                                                                                                    <span data-custom-class="body_text">
                                                                                                                        <span
                                                                                                                            style={{
                                                                                                                                fontSize: "15px",
                                                                                                                            }}>
                                                                                                                            <bdt className="block-component" />
                                                                                                                            Analyse
                                                                                                                            <bdt className="else-block" />{" "}
                                                                                                                            how our Services are used
                                                                                                                            so we can improve them to
                                                                                                                            engage and retain users
                                                                                                                            <bdt className="statement-end-if-in-editor" />
                                                                                                                        </span>
                                                                                                                    </span>
                                                                                                                </li>
                                                                                                            </ul>
                                                                                                            <div
                                                                                                                style={{
                                                                                                                    lineHeight: "1.5",
                                                                                                                }}>
                                                                                                                <span data-custom-class="body_text">
                                                                                                                    <span
                                                                                                                        style={{
                                                                                                                            fontSize: "15px",
                                                                                                                        }}>
                                                                                                                        <bdt className="block-component" />
                                                                                                                    </span>
                                                                                                                </span>
                                                                                                                <div
                                                                                                                    style={{
                                                                                                                        lineHeight: "1.5",
                                                                                                                    }}>
                                                                                                                    <span data-custom-class="body_text">
                                                                                                                        <span
                                                                                                                            style={{
                                                                                                                                fontSize: "15px",
                                                                                                                            }}>
                                                                                                                            <bdt className="block-component" />
                                                                                                                        </span>
                                                                                                                    </span>
                                                                                                                </div>
                                                                                                                <ul
                                                                                                                    style={{
                                                                                                                        marginLeft: "40px",
                                                                                                                    }}>
                                                                                                                    <li
                                                                                                                        data-custom-class="body_text"
                                                                                                                        style={{
                                                                                                                            lineHeight: "1.5",
                                                                                                                        }}>
                                                                                                                        <span data-custom-class="body_text">
                                                                                                                            <span
                                                                                                                                style={{
                                                                                                                                    fontSize: "15px",
                                                                                                                                }}>
                                                                                                                                Diagnose problems and/or
                                                                                                                                prevent fraudulent
                                                                                                                                activities
                                                                                                                                <bdt className="statement-end-if-in-editor" />
                                                                                                                            </span>
                                                                                                                        </span>
                                                                                                                    </li>
                                                                                                                </ul>
                                                                                                                <div
                                                                                                                    style={{
                                                                                                                        lineHeight: "1.5",
                                                                                                                    }}>
                                                                                                                    <span data-custom-class="body_text">
                                                                                                                        <span
                                                                                                                            style={{
                                                                                                                                fontSize: "15px",
                                                                                                                            }}>
                                                                                                                            <bdt className="block-component" />
                                                                                                                        </span>
                                                                                                                    </span>
                                                                                                                </div>
                                                                                                                <ul
                                                                                                                    style={{
                                                                                                                        marginLeft: "40px",
                                                                                                                    }}>
                                                                                                                    <li
                                                                                                                        data-custom-class="body_text"
                                                                                                                        style={{
                                                                                                                            lineHeight: "1.5",
                                                                                                                        }}>
                                                                                                                        <span data-custom-class="body_text">
                                                                                                                            <span
                                                                                                                                style={{
                                                                                                                                    fontSize: "15px",
                                                                                                                                }}>
                                                                                                                                Understand how our users
                                                                                                                                use our products and
                                                                                                                                services so we can
                                                                                                                                improve user experience
                                                                                                                                <bdt className="statement-end-if-in-editor" />
                                                                                                                            </span>
                                                                                                                        </span>
                                                                                                                    </li>
                                                                                                                </ul>
                                                                                                                <div
                                                                                                                    style={{
                                                                                                                        lineHeight: "1.5",
                                                                                                                    }}>
                                                                                                                    <span data-custom-class="body_text">
                                                                                                                        <span
                                                                                                                            style={{
                                                                                                                                fontSize: "15px",
                                                                                                                            }}>
                                                                                                                            <bdt className="block-component" />
                                                                                                                        </span>
                                                                                                                    </span>
                                                                                                                    <bdt className="statement-end-if-in-editor">
                                                                                                                        <span
                                                                                                                            style={{
                                                                                                                                fontSize: "15px",
                                                                                                                            }}>
                                                                                                                            <span data-custom-class="body_text" />
                                                                                                                        </span>
                                                                                                                    </bdt>
                                                                                                                    <bdt className="block-component">
                                                                                                                        <span
                                                                                                                            style={{
                                                                                                                                fontSize: "15px",
                                                                                                                            }}>
                                                                                                                            <span data-custom-class="body_text" />
                                                                                                                        </span>
                                                                                                                    </bdt>
                                                                                                                </div>
                                                                                                                <ul>
                                                                                                                    <li
                                                                                                                        data-custom-class="body_text"
                                                                                                                        style={{
                                                                                                                            lineHeight: "1.5",
                                                                                                                        }}>
                                                                                                                        <span data-custom-class="body_text">
                                                                                                                            <span
                                                                                                                                style={{
                                                                                                                                    fontSize: "15px",
                                                                                                                                }}>
                                                                                                                                <strong>
                                                                                                                                    Legal Obligations.
                                                                                                                                </strong>{" "}
                                                                                                                                We may process your
                                                                                                                                information where we
                                                                                                                                believe it is necessary
                                                                                                                                for compliance with our
                                                                                                                                legal obligations, such
                                                                                                                                as to cooperate with a
                                                                                                                                law enforcement body or
                                                                                                                                regulatory agency,
                                                                                                                                exercise or defend our
                                                                                                                                legal rights, or
                                                                                                                                disclose your
                                                                                                                                information as evidence
                                                                                                                                in litigation in which
                                                                                                                                we are involved.
                                                                                                                                <bdt className="statement-end-if-in-editor" />
                                                                                                                                <br />
                                                                                                                            </span>
                                                                                                                        </span>
                                                                                                                    </li>
                                                                                                                </ul>
                                                                                                                <div
                                                                                                                    style={{
                                                                                                                        lineHeight: "1.5",
                                                                                                                    }}>
                                                                                                                    <bdt className="block-component">
                                                                                                                        <span
                                                                                                                            style={{
                                                                                                                                fontSize: "15px",
                                                                                                                            }}>
                                                                                                                            <span data-custom-class="body_text" />
                                                                                                                        </span>
                                                                                                                    </bdt>
                                                                                                                </div>
                                                                                                                <ul>
                                                                                                                    <li
                                                                                                                        data-custom-class="body_text"
                                                                                                                        style={{
                                                                                                                            lineHeight: "1.5",
                                                                                                                        }}>
                                                                                                                        <span data-custom-class="body_text">
                                                                                                                            <span
                                                                                                                                style={{
                                                                                                                                    fontSize: "15px",
                                                                                                                                }}>
                                                                                                                                <strong>
                                                                                                                                    Vital Interests.
                                                                                                                                </strong>{" "}
                                                                                                                                We may process your
                                                                                                                                information where we
                                                                                                                                believe it is necessary
                                                                                                                                to protect your vital
                                                                                                                                interests or the vital
                                                                                                                                interests of a third
                                                                                                                                party, such as
                                                                                                                                situations involving
                                                                                                                                potential threats to the
                                                                                                                                safety of any person.
                                                                                                                            </span>
                                                                                                                        </span>
                                                                                                                        <bdt className="statement-end-if-in-editor">
                                                                                                                            <span
                                                                                                                                style={{
                                                                                                                                    fontSize: "15px",
                                                                                                                                }}>
                                                                                                                                <span data-custom-class="body_text" />
                                                                                                                            </span>
                                                                                                                        </bdt>
                                                                                                                    </li>
                                                                                                                </ul>
                                                                                                                <div
                                                                                                                    style={{
                                                                                                                        lineHeight: "1.5",
                                                                                                                    }}>
                                                                                                                    <bdt className="block-component">
                                                                                                                        <span
                                                                                                                            style={{
                                                                                                                                fontSize: "15px",
                                                                                                                            }}>
                                                                                                                            <span data-custom-class="body_text" />
                                                                                                                        </span>
                                                                                                                    </bdt>
                                                                                                                    <span data-custom-class="body_text">
                                                                                                                        <span
                                                                                                                            style={{
                                                                                                                                fontSize: "15px",
                                                                                                                            }}>
                                                                                                                            In legal terms, we are
                                                                                                                            generally the{" "}
                                                                                                                            <bdt className="block-component" />
                                                                                                                            'data controller'
                                                                                                                            <bdt className="else-block" />{" "}
                                                                                                                            under European data
                                                                                                                            protection laws of the
                                                                                                                            personal information
                                                                                                                            described in this Privacy
                                                                                                                            Notice, since we determine
                                                                                                                            the means and/or purposes
                                                                                                                            of the data processing we
                                                                                                                            perform. This Privacy
                                                                                                                            Notice does not apply to
                                                                                                                            the personal information
                                                                                                                            we process as a{" "}
                                                                                                                            <bdt className="block-component" />
                                                                                                                            'data processor'
                                                                                                                            <bdt className="else-block" />{" "}
                                                                                                                            on behalf of our
                                                                                                                            customers. In those
                                                                                                                            situations, the customer
                                                                                                                            that we provide services
                                                                                                                            to and with whom we have
                                                                                                                            entered into a data
                                                                                                                            processing agreement is
                                                                                                                            the{" "}
                                                                                                                            <bdt className="block-component" />
                                                                                                                            'data controller'
                                                                                                                            <bdt className="else-block" />{" "}
                                                                                                                            responsible for your
                                                                                                                            personal information, and
                                                                                                                            we merely process your
                                                                                                                            information on their
                                                                                                                            behalf in accordance with
                                                                                                                            your instructions. If you
                                                                                                                            want to know more about
                                                                                                                            our customers' privacy
                                                                                                                            practices, you should read
                                                                                                                            their privacy policies and
                                                                                                                            direct any questions you
                                                                                                                            have to them.
                                                                                                                        </span>
                                                                                                                    </span>
                                                                                                                </div>
                                                                                                                <div
                                                                                                                    style={{
                                                                                                                        lineHeight: "1.5",
                                                                                                                    }}>
                                                                                                                    <bdt className="statement-end-if-in-editor">
                                                                                                                        <span
                                                                                                                            style={{
                                                                                                                                fontSize: "15px",
                                                                                                                            }}>
                                                                                                                            <span data-custom-class="body_text" />
                                                                                                                        </span>
                                                                                                                    </bdt>
                                                                                                                    <span data-custom-class="body_text">
                                                                                                                        <span
                                                                                                                            style={{
                                                                                                                                fontSize: "15px",
                                                                                                                            }}>
                                                                                                                            <bdt className="block-component">
                                                                                                                                <bdt className="block-component" />
                                                                                                                            </bdt>
                                                                                                                        </span>
                                                                                                                    </span>
                                                                                                                    <bdt className="statement-end-if-in-editor">
                                                                                                                        <span
                                                                                                                            style={{
                                                                                                                                fontSize: "15px",
                                                                                                                            }}>
                                                                                                                            <span data-custom-class="body_text" />
                                                                                                                        </span>
                                                                                                                    </bdt>
                                                                                                                </div>
                                                                                                                <div
                                                                                                                    style={{
                                                                                                                        lineHeight: "1.5",
                                                                                                                    }}>
                                                                                                                    <br />
                                                                                                                </div>
                                                                                                                <div
                                                                                                                    id="whoshare"
                                                                                                                    style={{
                                                                                                                        lineHeight: "1.5",
                                                                                                                    }}>
                                                                                                                    <span
                                                                                                                        style={{
                                                                                                                            color:
                                                                                                                                "rgb(127, 127, 127)",
                                                                                                                        }}>
                                                                                                                        <span
                                                                                                                            style={{
                                                                                                                                color:
                                                                                                                                    "rgb(89, 89, 89)",
                                                                                                                                fontSize: "15px",
                                                                                                                            }}>
                                                                                                                            <span
                                                                                                                                style={{
                                                                                                                                    color:
                                                                                                                                        "rgb(89, 89, 89)",
                                                                                                                                    fontSize: "15px",
                                                                                                                                }}>
                                                                                                                                <span
                                                                                                                                    style={{
                                                                                                                                        color:
                                                                                                                                            "rgb(89, 89, 89)",
                                                                                                                                        fontSize: "15px",
                                                                                                                                    }}>
                                                                                                                                    <span
                                                                                                                                        id="control"
                                                                                                                                        style={{
                                                                                                                                            color:
                                                                                                                                                "rgb(0, 0, 0)",
                                                                                                                                        }}>
                                                                                                                                        <strong>
                                                                                                                                            <span data-custom-class="heading_1">
                                                                                                                                                <h2>
                                                                                                                                                    4. WHEN AND
                                                                                                                                                    WITH WHOM DO
                                                                                                                                                    WE SHARE YOUR
                                                                                                                                                    PERSONAL
                                                                                                                                                    INFORMATION?
                                                                                                                                                </h2>
                                                                                                                                            </span>
                                                                                                                                        </strong>
                                                                                                                                    </span>
                                                                                                                                </span>
                                                                                                                            </span>
                                                                                                                        </span>
                                                                                                                    </span>
                                                                                                                    <span
                                                                                                                        style={{
                                                                                                                            color: "rgb(89, 89, 89)",
                                                                                                                            fontSize: "15px",
                                                                                                                        }}>
                                                                                                                        <span
                                                                                                                            style={{
                                                                                                                                color:
                                                                                                                                    "rgb(89, 89, 89)",
                                                                                                                                fontSize: "15px",
                                                                                                                            }}>
                                                                                                                            <span data-custom-class="body_text">
                                                                                                                                <strong>
                                                                                                                                    <em>In Short:</em>
                                                                                                                                </strong>
                                                                                                                                <em>
                                                                                                                                    We may share
                                                                                                                                    information in
                                                                                                                                    specific situations
                                                                                                                                    described in this
                                                                                                                                    section and/or with
                                                                                                                                    the following{" "}
                                                                                                                                    <bdt className="block-component" />
                                                                                                                                    categories of{" "}
                                                                                                                                    <bdt className="statement-end-if-in-editor" />
                                                                                                                                    third parties.
                                                                                                                                </em>
                                                                                                                            </span>
                                                                                                                        </span>
                                                                                                                    </span>
                                                                                                                </div>
                                                                                                                <div
                                                                                                                    style={{
                                                                                                                        lineHeight: "1.5",
                                                                                                                    }}>
                                                                                                                    <span
                                                                                                                        style={{
                                                                                                                            color: "rgb(89, 89, 89)",
                                                                                                                            fontSize: "15px",
                                                                                                                        }}>
                                                                                                                        <span
                                                                                                                            style={{
                                                                                                                                color:
                                                                                                                                    "rgb(89, 89, 89)",
                                                                                                                                fontSize: "15px",
                                                                                                                            }}>
                                                                                                                            <span data-custom-class="body_text">
                                                                                                                                <bdt className="block-component" />
                                                                                                                            </span>
                                                                                                                        </span>
                                                                                                                    </span>
                                                                                                                </div>
                                                                                                                <div
                                                                                                                    style={{
                                                                                                                        lineHeight: "1.5",
                                                                                                                    }}>
                                                                                                                    <br />
                                                                                                                </div>
                                                                                                                <div
                                                                                                                    style={{
                                                                                                                        lineHeight: "1.5",
                                                                                                                    }}>
                                                                                                                    <span
                                                                                                                        style={{
                                                                                                                            fontSize: "15px",
                                                                                                                        }}>
                                                                                                                        <span data-custom-class="body_text">
                                                                                                                            <strong>
                                                                                                                                Vendors, Consultants,
                                                                                                                                and Other Third-Party
                                                                                                                                Service Providers.
                                                                                                                            </strong>{" "}
                                                                                                                            We may share your data
                                                                                                                            with third-party vendors,
                                                                                                                            service providers,
                                                                                                                            contractors, or agents (
                                                                                                                            <bdt className="block-component" />
                                                                                                                            '
                                                                                                                            <strong>
                                                                                                                                third parties
                                                                                                                            </strong>
                                                                                                                            '
                                                                                                                            <bdt className="else-block" />
                                                                                                                            ) who perform services for
                                                                                                                            us or on our behalf and
                                                                                                                            require access to such
                                                                                                                            information to do that
                                                                                                                            work.{" "}
                                                                                                                            <bdt className="block-component" />
                                                                                                                            We have contracts in place
                                                                                                                            with our third parties,
                                                                                                                            which are designed to help
                                                                                                                            safeguard your personal
                                                                                                                            information. This means
                                                                                                                            that they cannot do
                                                                                                                            anything with your
                                                                                                                            personal information
                                                                                                                            unless we have instructed
                                                                                                                            them to do it. They will
                                                                                                                            also not share your
                                                                                                                            personal information with
                                                                                                                            any{" "}
                                                                                                                            <bdt className="block-component" />
                                                                                                                            organisation
                                                                                                                            <bdt className="else-block" />{" "}
                                                                                                                            apart from us. They also
                                                                                                                            commit to pr
                                                                                                                        </span>
                                                                                                                        <span data-custom-class="body_text">
                                                                                                                            otect the data they hold
                                                                                                                            on our behalf and to
                                                                                                                            retain it for the period
                                                                                                                            we instruct.{" "}
                                                                                                                            <bdt className="statement-end-if-in-editor" />
                                                                                                                        </span>
                                                                                                                        <bdt className="block-component" />
                                                                                                                    </span>
                                                                                                                </div>
                                                                                                                <div
                                                                                                                    style={{
                                                                                                                        lineHeight: "1.5",
                                                                                                                    }}>
                                                                                                                    <br />
                                                                                                                </div>
                                                                                                                <div
                                                                                                                    style={{
                                                                                                                        lineHeight: "1.5",
                                                                                                                    }}>
                                                                                                                    <span
                                                                                                                        style={{
                                                                                                                            fontSize: "15px",
                                                                                                                        }}>
                                                                                                                        <span data-custom-class="body_text">
                                                                                                                            The{" "}
                                                                                                                            <bdt className="block-component" />
                                                                                                                            categories of{" "}
                                                                                                                            <bdt className="statement-end-if-in-editor" />
                                                                                                                            third parties we may share
                                                                                                                            personal information with
                                                                                                                            are as follows:
                                                                                                                        </span>
                                                                                                                    </span>
                                                                                                                    <span
                                                                                                                        style={{
                                                                                                                            color: "rgb(89, 89, 89)",
                                                                                                                            fontSize: "15px",
                                                                                                                        }}>
                                                                                                                        <span
                                                                                                                            style={{
                                                                                                                                color:
                                                                                                                                    "rgb(89, 89, 89)",
                                                                                                                                fontSize: "15px",
                                                                                                                            }}>
                                                                                                                            <span data-custom-class="body_text">
                                                                                                                                <bdt className="block-component" />
                                                                                                                                <bdt className="forloop-component" />
                                                                                                                            </span>
                                                                                                                        </span>
                                                                                                                    </span>
                                                                                                                </div>
                                                                                                                <ul>
                                                                                                                    <li
                                                                                                                        data-custom-class="body_text"
                                                                                                                        style={{
                                                                                                                            lineHeight: "1.5",
                                                                                                                        }}>
                                                                                                                        <span
                                                                                                                            style={{
                                                                                                                                color:
                                                                                                                                    "rgb(89, 89, 89)",
                                                                                                                                fontSize: "15px",
                                                                                                                            }}>
                                                                                                                            <span
                                                                                                                                style={{
                                                                                                                                    color:
                                                                                                                                        "rgb(89, 89, 89)",
                                                                                                                                    fontSize: "15px",
                                                                                                                                }}>
                                                                                                                                <span data-custom-class="body_text">
                                                                                                                                    <bdt className="question">
                                                                                                                                        Data Analytics
                                                                                                                                        Services
                                                                                                                                    </bdt>
                                                                                                                                </span>
                                                                                                                            </span>
                                                                                                                        </span>
                                                                                                                    </li>
                                                                                                                </ul>
                                                                                                                <div>
                                                                                                                    <span
                                                                                                                        style={{
                                                                                                                            color: "rgb(89, 89, 89)",
                                                                                                                            fontSize: "15px",
                                                                                                                        }}>
                                                                                                                        <span
                                                                                                                            style={{
                                                                                                                                color:
                                                                                                                                    "rgb(89, 89, 89)",
                                                                                                                                fontSize: "15px",
                                                                                                                            }}>
                                                                                                                            <span data-custom-class="body_text">
                                                                                                                                <span
                                                                                                                                    style={{
                                                                                                                                        fontSize: "15px",
                                                                                                                                    }}>
                                                                                                                                    <span
                                                                                                                                        style={{
                                                                                                                                            color:
                                                                                                                                                "rgb(89, 89, 89)",
                                                                                                                                        }}>
                                                                                                                                        <span data-custom-class="body_text">
                                                                                                                                            <span
                                                                                                                                                style={{
                                                                                                                                                    fontSize:
                                                                                                                                                        "15px",
                                                                                                                                                }}>
                                                                                                                                                <span
                                                                                                                                                    style={{
                                                                                                                                                        color:
                                                                                                                                                            "rgb(89, 89, 89)",
                                                                                                                                                    }}>
                                                                                                                                                    <bdt className="block-component">
                                                                                                                                                        <span
                                                                                                                                                            style={{
                                                                                                                                                                color:
                                                                                                                                                                    "rgb(89, 89, 89)",
                                                                                                                                                                fontSize:
                                                                                                                                                                    "15px",
                                                                                                                                                            }}>
                                                                                                                                                            <span
                                                                                                                                                                style={{
                                                                                                                                                                    color:
                                                                                                                                                                        "rgb(89, 89, 89)",
                                                                                                                                                                    fontSize:
                                                                                                                                                                        "15px",
                                                                                                                                                                }}>
                                                                                                                                                                <span data-custom-class="body_text">
                                                                                                                                                                    <bdt className="forloop-component">
                                                                                                                                                                        <span
                                                                                                                                                                            style={{
                                                                                                                                                                                color:
                                                                                                                                                                                    "rgb(89, 89, 89)",
                                                                                                                                                                                fontSize:
                                                                                                                                                                                    "15px",
                                                                                                                                                                            }}>
                                                                                                                                                                            <span
                                                                                                                                                                                style={{
                                                                                                                                                                                    color:
                                                                                                                                                                                        "rgb(89, 89, 89)",
                                                                                                                                                                                    fontSize:
                                                                                                                                                                                        "15px",
                                                                                                                                                                                }}>
                                                                                                                                                                                <span data-custom-class="body_text">
                                                                                                                                                                                    <span
                                                                                                                                                                                        style={{
                                                                                                                                                                                            fontSize:
                                                                                                                                                                                                "15px",
                                                                                                                                                                                        }}>
                                                                                                                                                                                        <span
                                                                                                                                                                                            style={{
                                                                                                                                                                                                color:
                                                                                                                                                                                                    "rgb(89, 89, 89)",
                                                                                                                                                                                            }}>
                                                                                                                                                                                            <span data-custom-class="body_text">
                                                                                                                                                                                                <span
                                                                                                                                                                                                    style={{
                                                                                                                                                                                                        fontSize:
                                                                                                                                                                                                            "15px",
                                                                                                                                                                                                    }}>
                                                                                                                                                                                                    <span
                                                                                                                                                                                                        style={{
                                                                                                                                                                                                            color:
                                                                                                                                                                                                                "rgb(89, 89, 89)",
                                                                                                                                                                                                        }}>
                                                                                                                                                                                                        <span
                                                                                                                                                                                                            style={{
                                                                                                                                                                                                                fontSize:
                                                                                                                                                                                                                    "15px",
                                                                                                                                                                                                            }}>
                                                                                                                                                                                                            <span
                                                                                                                                                                                                                style={{
                                                                                                                                                                                                                    color:
                                                                                                                                                                                                                        "rgb(89, 89, 89)",
                                                                                                                                                                                                                }}>
                                                                                                                                                                                                                <span
                                                                                                                                                                                                                    style={{
                                                                                                                                                                                                                        fontSize:
                                                                                                                                                                                                                            "15px",
                                                                                                                                                                                                                    }}>
                                                                                                                                                                                                                    <span
                                                                                                                                                                                                                        style={{
                                                                                                                                                                                                                            color:
                                                                                                                                                                                                                                "rgb(89, 89, 89)",
                                                                                                                                                                                                                        }}>
                                                                                                                                                                                                                        <bdt className="statement-end-if-in-editor" />
                                                                                                                                                                                                                    </span>
                                                                                                                                                                                                                </span>
                                                                                                                                                                                                            </span>
                                                                                                                                                                                                        </span>
                                                                                                                                                                                                    </span>
                                                                                                                                                                                                </span>
                                                                                                                                                                                            </span>
                                                                                                                                                                                        </span>
                                                                                                                                                                                    </span>
                                                                                                                                                                                </span>
                                                                                                                                                                            </span>
                                                                                                                                                                        </span>
                                                                                                                                                                    </bdt>
                                                                                                                                                                </span>
                                                                                                                                                            </span>
                                                                                                                                                        </span>
                                                                                                                                                    </bdt>
                                                                                                                                                </span>
                                                                                                                                            </span>
                                                                                                                                        </span>
                                                                                                                                    </span>
                                                                                                                                </span>
                                                                                                                            </span>
                                                                                                                            <span data-custom-class="body_text">
                                                                                                                                <bdt className="block-component" />
                                                                                                                            </span>
                                                                                                                        </span>
                                                                                                                    </span>
                                                                                                                    <bdt className="block-component" />
                                                                                                                    <span
                                                                                                                        style={{
                                                                                                                            fontSize: "15px",
                                                                                                                        }}>
                                                                                                                        <bdt className="block-component" />
                                                                                                                    </span>
                                                                                                                    <bdt className="block-component" />
                                                                                                                    <bdt className="block-component" />
                                                                                                                    <bdt className="block-component" />
                                                                                                                    <bdt className="block-component" />
                                                                                                                    <bdt className="block-component" />
                                                                                                                    <bdt className="block-component" />
                                                                                                                    <bdt className="block-component" />
                                                                                                                    <bdt className="block-component" />
                                                                                                                    <bdt className="block-component" />
                                                                                                                    <bdt className="block-component" />
                                                                                                                    <bdt className="block-component" />
                                                                                                                    <bdt className="block-component" />
                                                                                                                    <bdt className="block-component" />
                                                                                                                    <bdt className="block-component" />
                                                                                                                    <bdt className="block-component" />
                                                                                                                    <span data-custom-class="body_text" />
                                                                                                                    <span data-custom-class="body_text" />
                                                                                                                    <span data-custom-class="body_text" />
                                                                                                                    <span data-custom-class="body_text" />
                                                                                                                </div>
                                                                                                                <div
                                                                                                                    style={{
                                                                                                                        lineHeight: "1.5",
                                                                                                                    }}>
                                                                                                                    <br />
                                                                                                                </div>
                                                                                                                <div
                                                                                                                    style={{
                                                                                                                        lineHeight: "1.5",
                                                                                                                    }}>
                                                                                                                    <span
                                                                                                                        style={{
                                                                                                                            fontSize: "15px",
                                                                                                                        }}>
                                                                                                                        <span data-custom-class="body_text">
                                                                                                                            We{" "}
                                                                                                                            <bdt className="block-component" />
                                                                                                                            also{" "}
                                                                                                                            <bdt className="statement-end-if-in-editor" />
                                                                                                                            may need to share your
                                                                                                                            personal information in
                                                                                                                            the following situations:
                                                                                                                        </span>
                                                                                                                    </span>
                                                                                                                </div>
                                                                                                                <ul>
                                                                                                                    <li
                                                                                                                        data-custom-class="body_text"
                                                                                                                        style={{
                                                                                                                            lineHeight: "1.5",
                                                                                                                        }}>
                                                                                                                        <span
                                                                                                                            style={{
                                                                                                                                fontSize: "15px",
                                                                                                                            }}>
                                                                                                                            <span data-custom-class="body_text">
                                                                                                                                <strong>
                                                                                                                                    Business Transfers.
                                                                                                                                </strong>{" "}
                                                                                                                                We may share or transfer
                                                                                                                                your information in
                                                                                                                                connection with, or
                                                                                                                                during negotiations of,
                                                                                                                                any merger, sale of
                                                                                                                                company assets,
                                                                                                                                financing, or
                                                                                                                                acquisition of all or a
                                                                                                                                portion of our business
                                                                                                                                to another company.
                                                                                                                            </span>
                                                                                                                        </span>
                                                                                                                    </li>
                                                                                                                </ul>
                                                                                                                <div
                                                                                                                    style={{
                                                                                                                        lineHeight: "1.5",
                                                                                                                    }}>
                                                                                                                    <span
                                                                                                                        style={{
                                                                                                                            fontSize: "15px",
                                                                                                                        }}>
                                                                                                                        <span data-custom-class="body_text">
                                                                                                                            <bdt className="block-component" />
                                                                                                                        </span>
                                                                                                                    </span>
                                                                                                                    <div
                                                                                                                        style={{
                                                                                                                            lineHeight: "1.5",
                                                                                                                        }}>
                                                                                                                        <span
                                                                                                                            style={{
                                                                                                                                fontSize: "15px",
                                                                                                                            }}>
                                                                                                                            <bdt className="block-component">
                                                                                                                                <span data-custom-class="body_text" />
                                                                                                                            </bdt>
                                                                                                                        </span>
                                                                                                                        <div
                                                                                                                            style={{
                                                                                                                                lineHeight: "1.5",
                                                                                                                            }}>
                                                                                                                            <bdt className="block-component">
                                                                                                                                <span
                                                                                                                                    style={{
                                                                                                                                        fontSize: "15px",
                                                                                                                                    }}>
                                                                                                                                    <span data-custom-class="body_text" />
                                                                                                                                </span>
                                                                                                                            </bdt>
                                                                                                                            <div
                                                                                                                                style={{
                                                                                                                                    lineHeight: "1.5",
                                                                                                                                }}>
                                                                                                                                <bdt className="block-component">
                                                                                                                                    <span
                                                                                                                                        style={{
                                                                                                                                            fontSize: "15px",
                                                                                                                                        }}>
                                                                                                                                        <span data-custom-class="body_text" />
                                                                                                                                    </span>
                                                                                                                                </bdt>
                                                                                                                                <div
                                                                                                                                    style={{
                                                                                                                                        lineHeight: "1.5",
                                                                                                                                    }}>
                                                                                                                                    <bdt className="block-component">
                                                                                                                                        <span
                                                                                                                                            style={{
                                                                                                                                                fontSize:
                                                                                                                                                    "15px",
                                                                                                                                            }}>
                                                                                                                                            <span data-custom-class="body_text" />
                                                                                                                                        </span>
                                                                                                                                    </bdt>
                                                                                                                                    <div
                                                                                                                                        style={{
                                                                                                                                            lineHeight: "1.5",
                                                                                                                                        }}>
                                                                                                                                        <bdt className="block-component">
                                                                                                                                            <span
                                                                                                                                                style={{
                                                                                                                                                    fontSize:
                                                                                                                                                        "15px",
                                                                                                                                                }}>
                                                                                                                                                <span data-custom-class="body_text" />
                                                                                                                                            </span>
                                                                                                                                        </bdt>
                                                                                                                                        <span
                                                                                                                                            style={{
                                                                                                                                                color:
                                                                                                                                                    "rgb(89, 89, 89)",
                                                                                                                                                fontSize:
                                                                                                                                                    "15px",
                                                                                                                                            }}>
                                                                                                                                            <span
                                                                                                                                                style={{
                                                                                                                                                    fontSize:
                                                                                                                                                        "15px",
                                                                                                                                                }}>
                                                                                                                                                <span
                                                                                                                                                    style={{
                                                                                                                                                        color:
                                                                                                                                                            "rgb(89, 89, 89)",
                                                                                                                                                    }}>
                                                                                                                                                    <span
                                                                                                                                                        style={{
                                                                                                                                                            fontSize:
                                                                                                                                                                "15px",
                                                                                                                                                        }}>
                                                                                                                                                        <span
                                                                                                                                                            style={{
                                                                                                                                                                color:
                                                                                                                                                                    "rgb(89, 89, 89)",
                                                                                                                                                            }}>
                                                                                                                                                            <bdt className="block-component">
                                                                                                                                                                <span data-custom-class="heading_1">
                                                                                                                                                                    <bdt className="block-component" />
                                                                                                                                                                </span>
                                                                                                                                                            </bdt>
                                                                                                                                                        </span>
                                                                                                                                                    </span>
                                                                                                                                                </span>
                                                                                                                                            </span>
                                                                                                                                        </span>
                                                                                                                                    </div>
                                                                                                                                    <div
                                                                                                                                        style={{
                                                                                                                                            lineHeight: "1.5",
                                                                                                                                        }}>
                                                                                                                                        <br />
                                                                                                                                    </div>
                                                                                                                                    <div
                                                                                                                                        id="cookies"
                                                                                                                                        style={{
                                                                                                                                            lineHeight: "1.5",
                                                                                                                                        }}>
                                                                                                                                        <span
                                                                                                                                            style={{
                                                                                                                                                color:
                                                                                                                                                    "rgb(127, 127, 127)",
                                                                                                                                            }}>
                                                                                                                                            <span
                                                                                                                                                style={{
                                                                                                                                                    color:
                                                                                                                                                        "rgb(89, 89, 89)",
                                                                                                                                                    fontSize:
                                                                                                                                                        "15px",
                                                                                                                                                }}>
                                                                                                                                                <span
                                                                                                                                                    style={{
                                                                                                                                                        color:
                                                                                                                                                            "rgb(89, 89, 89)",
                                                                                                                                                        fontSize:
                                                                                                                                                            "15px",
                                                                                                                                                    }}>
                                                                                                                                                    <span
                                                                                                                                                        style={{
                                                                                                                                                            color:
                                                                                                                                                                "rgb(89, 89, 89)",
                                                                                                                                                            fontSize:
                                                                                                                                                                "15px",
                                                                                                                                                        }}>
                                                                                                                                                        <span
                                                                                                                                                            id="control"
                                                                                                                                                            style={{
                                                                                                                                                                color:
                                                                                                                                                                    "rgb(0, 0, 0)",
                                                                                                                                                            }}>
                                                                                                                                                            <strong>
                                                                                                                                                                <span data-custom-class="heading_1">
                                                                                                                                                                    <h2>
                                                                                                                                                                        5.
                                                                                                                                                                        DO
                                                                                                                                                                        WE
                                                                                                                                                                        USE
                                                                                                                                                                        COOKIES
                                                                                                                                                                        AND
                                                                                                                                                                        OTHER
                                                                                                                                                                        TRACKING
                                                                                                                                                                        TECHNOLOGIES?
                                                                                                                                                                    </h2>
                                                                                                                                                                </span>
                                                                                                                                                            </strong>
                                                                                                                                                        </span>
                                                                                                                                                    </span>
                                                                                                                                                </span>
                                                                                                                                            </span>
                                                                                                                                        </span>
                                                                                                                                        <span
                                                                                                                                            style={{
                                                                                                                                                color:
                                                                                                                                                    "rgb(89, 89, 89)",
                                                                                                                                                fontSize:
                                                                                                                                                    "15px",
                                                                                                                                            }}>
                                                                                                                                            <span
                                                                                                                                                style={{
                                                                                                                                                    color:
                                                                                                                                                        "rgb(89, 89, 89)",
                                                                                                                                                    fontSize:
                                                                                                                                                        "15px",
                                                                                                                                                }}>
                                                                                                                                                <span data-custom-class="body_text">
                                                                                                                                                    <strong>
                                                                                                                                                        <em>
                                                                                                                                                            In Short:
                                                                                                                                                        </em>
                                                                                                                                                    </strong>
                                                                                                                                                    <em>
                                                                                                                                                        We may use
                                                                                                                                                        cookies and
                                                                                                                                                        other
                                                                                                                                                        tracking
                                                                                                                                                        technologies
                                                                                                                                                        to collect
                                                                                                                                                        and store
                                                                                                                                                        your
                                                                                                                                                        information.
                                                                                                                                                    </em>
                                                                                                                                                </span>
                                                                                                                                            </span>
                                                                                                                                        </span>
                                                                                                                                    </div>
                                                                                                                                    <div
                                                                                                                                        style={{
                                                                                                                                            lineHeight: "1.5",
                                                                                                                                        }}>
                                                                                                                                        <br />
                                                                                                                                    </div>
                                                                                                                                    <div
                                                                                                                                        style={{
                                                                                                                                            lineHeight: "1.5",
                                                                                                                                        }}>
                                                                                                                                        <span
                                                                                                                                            style={{
                                                                                                                                                color:
                                                                                                                                                    "rgb(89, 89, 89)",
                                                                                                                                                fontSize:
                                                                                                                                                    "15px",
                                                                                                                                            }}>
                                                                                                                                            <span
                                                                                                                                                style={{
                                                                                                                                                    color:
                                                                                                                                                        "rgb(89, 89, 89)",
                                                                                                                                                    fontSize:
                                                                                                                                                        "15px",
                                                                                                                                                }}>
                                                                                                                                                <span data-custom-class="body_text">
                                                                                                                                                    We may use
                                                                                                                                                    cookies and
                                                                                                                                                    similar
                                                                                                                                                    tracking
                                                                                                                                                    technologies
                                                                                                                                                    (like web
                                                                                                                                                    beacons and
                                                                                                                                                    pixels) to
                                                                                                                                                    gather
                                                                                                                                                    information
                                                                                                                                                    when you
                                                                                                                                                    interact with
                                                                                                                                                    our Services.
                                                                                                                                                    Some online
                                                                                                                                                    tracking
                                                                                                                                                    technologies
                                                                                                                                                    help us
                                                                                                                                                    maintain the
                                                                                                                                                    security of
                                                                                                                                                    our Services
                                                                                                                                                    <bdt className="block-component" />
                                                                                                                                                    , prevent
                                                                                                                                                    crashes, fix
                                                                                                                                                    bugs, save
                                                                                                                                                    your
                                                                                                                                                    preferences,
                                                                                                                                                    and assist
                                                                                                                                                    with basic
                                                                                                                                                    site
                                                                                                                                                    functions.
                                                                                                                                                </span>
                                                                                                                                            </span>
                                                                                                                                        </span>
                                                                                                                                    </div>
                                                                                                                                    <div
                                                                                                                                        style={{
                                                                                                                                            lineHeight: "1.5",
                                                                                                                                        }}>
                                                                                                                                        <br />
                                                                                                                                    </div>
                                                                                                                                    <div
                                                                                                                                        style={{
                                                                                                                                            lineHeight: "1.5",
                                                                                                                                        }}>
                                                                                                                                        <span
                                                                                                                                            style={{
                                                                                                                                                color:
                                                                                                                                                    "rgb(89, 89, 89)",
                                                                                                                                                fontSize:
                                                                                                                                                    "15px",
                                                                                                                                            }}>
                                                                                                                                            <span
                                                                                                                                                style={{
                                                                                                                                                    color:
                                                                                                                                                        "rgb(89, 89, 89)",
                                                                                                                                                    fontSize:
                                                                                                                                                        "15px",
                                                                                                                                                }}>
                                                                                                                                                <span data-custom-class="body_text">
                                                                                                                                                    We also permit
                                                                                                                                                    third parties
                                                                                                                                                    and service
                                                                                                                                                    providers to
                                                                                                                                                    use online
                                                                                                                                                    tracking
                                                                                                                                                    technologies
                                                                                                                                                    on our
                                                                                                                                                    Services for
                                                                                                                                                    analytics and
                                                                                                                                                    advertising,
                                                                                                                                                    including to
                                                                                                                                                    help manage
                                                                                                                                                    and display
                                                                                                                                                    advertisements,
                                                                                                                                                    to tailor
                                                                                                                                                    advertisements
                                                                                                                                                    to your
                                                                                                                                                    interests, or
                                                                                                                                                    to send
                                                                                                                                                    abandoned
                                                                                                                                                    shopping cart
                                                                                                                                                    reminders
                                                                                                                                                    (depending on
                                                                                                                                                    your
                                                                                                                                                    communication
                                                                                                                                                    preferences).
                                                                                                                                                    The third
                                                                                                                                                    parties and
                                                                                                                                                    service
                                                                                                                                                    providers use
                                                                                                                                                    their
                                                                                                                                                    technology to
                                                                                                                                                    provide
                                                                                                                                                    advertising
                                                                                                                                                    about products
                                                                                                                                                    and services
                                                                                                                                                    tailored to
                                                                                                                                                    your interests
                                                                                                                                                    which may
                                                                                                                                                    appear either
                                                                                                                                                    on our
                                                                                                                                                    Services or on
                                                                                                                                                    other
                                                                                                                                                    websites.
                                                                                                                                                </span>
                                                                                                                                            </span>
                                                                                                                                        </span>
                                                                                                                                        <bdt className="block-component">
                                                                                                                                            <span
                                                                                                                                                style={{
                                                                                                                                                    fontSize:
                                                                                                                                                        "15px",
                                                                                                                                                }}
                                                                                                                                            />
                                                                                                                                        </bdt>
                                                                                                                                    </div>
                                                                                                                                    <div
                                                                                                                                        style={{
                                                                                                                                            lineHeight: "1.5",
                                                                                                                                        }}>
                                                                                                                                        <br />
                                                                                                                                    </div>
                                                                                                                                    <div
                                                                                                                                        style={{
                                                                                                                                            lineHeight: "1.5",
                                                                                                                                        }}>
                                                                                                                                        <span
                                                                                                                                            style={{
                                                                                                                                                color:
                                                                                                                                                    "rgb(89, 89, 89)",
                                                                                                                                                fontSize:
                                                                                                                                                    "15px",
                                                                                                                                            }}>
                                                                                                                                            <span
                                                                                                                                                style={{
                                                                                                                                                    color:
                                                                                                                                                        "rgb(89, 89, 89)",
                                                                                                                                                    fontSize:
                                                                                                                                                        "15px",
                                                                                                                                                }}>
                                                                                                                                                <span data-custom-class="body_text">
                                                                                                                                                    Specific
                                                                                                                                                    information
                                                                                                                                                    about how we
                                                                                                                                                    use such
                                                                                                                                                    technologies
                                                                                                                                                    and how you
                                                                                                                                                    can refuse
                                                                                                                                                    certain
                                                                                                                                                    cookies is set
                                                                                                                                                    out in our
                                                                                                                                                    Cookie Notice
                                                                                                                                                    <span
                                                                                                                                                        style={{
                                                                                                                                                            color:
                                                                                                                                                                "rgb(89, 89, 89)",
                                                                                                                                                            fontSize:
                                                                                                                                                                "15px",
                                                                                                                                                        }}>
                                                                                                                                                        <span data-custom-class="body_text">
                                                                                                                                                            <bdt className="block-component" />
                                                                                                                                                            .
                                                                                                                                                        </span>
                                                                                                                                                    </span>
                                                                                                                                                </span>
                                                                                                                                            </span>
                                                                                                                                        </span>
                                                                                                                                        <bdt className="block-component">
                                                                                                                                            <span
                                                                                                                                                style={{
                                                                                                                                                    fontSize:
                                                                                                                                                        "15px",
                                                                                                                                                }}
                                                                                                                                            />
                                                                                                                                        </bdt>
                                                                                                                                        <span
                                                                                                                                            style={{
                                                                                                                                                fontSize:
                                                                                                                                                    "15px",
                                                                                                                                            }}>
                                                                                                                                            <strong>
                                                                                                                                                <span data-custom-class="heading_2">
                                                                                                                                                    <h3>
                                                                                                                                                        Google
                                                                                                                                                        Analytics
                                                                                                                                                    </h3>
                                                                                                                                                </span>
                                                                                                                                            </strong>{" "}
                                                                                                                                            <span data-custom-class="body_text">
                                                                                                                                                We may share
                                                                                                                                                your information
                                                                                                                                                with Google
                                                                                                                                                Analytics to
                                                                                                                                                track and{" "}
                                                                                                                                                <bdt className="block-component" />
                                                                                                                                                analyse
                                                                                                                                                <bdt className="else-block" />{" "}
                                                                                                                                                the use of the
                                                                                                                                                Services.
                                                                                                                                                <bdt className="block-component" />{" "}
                                                                                                                                                To opt out of
                                                                                                                                                being tracked by
                                                                                                                                                Google Analytics
                                                                                                                                                across the
                                                                                                                                                Services, visit{" "}
                                                                                                                                                <span
                                                                                                                                                    style={{
                                                                                                                                                        color:
                                                                                                                                                            "rgb(0, 58, 250)",
                                                                                                                                                    }}>
                                                                                                                                                    <a
                                                                                                                                                        data-custom-class="link"
                                                                                                                                                        href="https://tools.google.com/dlpage/gaoptout"
                                                                                                                                                        rel="noopener noreferrer"
                                                                                                                                                        target="_blank">
                                                                                                                                                        https://tools.google.com/dlpage/gaoptout
                                                                                                                                                    </a>
                                                                                                                                                    .
                                                                                                                                                </span>
                                                                                                                                                <bdt className="block-component" />{" "}
                                                                                                                                                For more
                                                                                                                                                information on
                                                                                                                                                the privacy
                                                                                                                                                practices of
                                                                                                                                                Google, please
                                                                                                                                                visit the{" "}
                                                                                                                                                <span
                                                                                                                                                    style={{
                                                                                                                                                        color:
                                                                                                                                                            "rgb(0, 58, 250)",
                                                                                                                                                    }}>
                                                                                                                                                    <a
                                                                                                                                                        data-custom-class="link"
                                                                                                                                                        href="https://policies.google.com/privacy"
                                                                                                                                                        rel="noopener noreferrer"
                                                                                                                                                        target="_blank">
                                                                                                                                                        Google
                                                                                                                                                        Privacy &
                                                                                                                                                        Terms page
                                                                                                                                                    </a>
                                                                                                                                                </span>
                                                                                                                                                .
                                                                                                                                            </span>
                                                                                                                                        </span>
                                                                                                                                        <bdt className="statement-end-if-in-editor">
                                                                                                                                            <span
                                                                                                                                                style={{
                                                                                                                                                    fontSize:
                                                                                                                                                        "15px",
                                                                                                                                                }}
                                                                                                                                            />
                                                                                                                                        </bdt>
                                                                                                                                        <span
                                                                                                                                            style={{
                                                                                                                                                color:
                                                                                                                                                    "rgb(89, 89, 89)",
                                                                                                                                                fontSize:
                                                                                                                                                    "15px",
                                                                                                                                            }}>
                                                                                                                                            <span
                                                                                                                                                style={{
                                                                                                                                                    color:
                                                                                                                                                        "rgb(89, 89, 89)",
                                                                                                                                                    fontSize:
                                                                                                                                                        "15px",
                                                                                                                                                }}>
                                                                                                                                                <span data-custom-class="body_text">
                                                                                                                                                    <span
                                                                                                                                                        style={{
                                                                                                                                                            color:
                                                                                                                                                                "rgb(89, 89, 89)",
                                                                                                                                                            fontSize:
                                                                                                                                                                "15px",
                                                                                                                                                        }}>
                                                                                                                                                        <span
                                                                                                                                                            style={{
                                                                                                                                                                color:
                                                                                                                                                                    "rgb(89, 89, 89)",
                                                                                                                                                                fontSize:
                                                                                                                                                                    "15px",
                                                                                                                                                            }}>
                                                                                                                                                            <span
                                                                                                                                                                style={{
                                                                                                                                                                    fontSize:
                                                                                                                                                                        "15px",
                                                                                                                                                                }}>
                                                                                                                                                                <span
                                                                                                                                                                    style={{
                                                                                                                                                                        color:
                                                                                                                                                                            "rgb(89, 89, 89)",
                                                                                                                                                                    }}>
                                                                                                                                                                    <span
                                                                                                                                                                        style={{
                                                                                                                                                                            fontSize:
                                                                                                                                                                                "15px",
                                                                                                                                                                        }}>
                                                                                                                                                                        <span
                                                                                                                                                                            style={{
                                                                                                                                                                                color:
                                                                                                                                                                                    "rgb(89, 89, 89)",
                                                                                                                                                                            }}>
                                                                                                                                                                            <span data-custom-class="body_text">
                                                                                                                                                                                <bdt className="statement-end-if-in-editor" />
                                                                                                                                                                            </span>
                                                                                                                                                                        </span>
                                                                                                                                                                    </span>
                                                                                                                                                                </span>
                                                                                                                                                            </span>
                                                                                                                                                        </span>
                                                                                                                                                    </span>
                                                                                                                                                </span>
                                                                                                                                            </span>
                                                                                                                                        </span>
                                                                                                                                        <span
                                                                                                                                            style={{
                                                                                                                                                fontSize:
                                                                                                                                                    "15px",
                                                                                                                                            }}>
                                                                                                                                            <bdt className="block-component" />
                                                                                                                                        </span>
                                                                                                                                        <span
                                                                                                                                            style={{
                                                                                                                                                color:
                                                                                                                                                    "rgb(89, 89, 89)",
                                                                                                                                                fontSize:
                                                                                                                                                    "15px",
                                                                                                                                            }}>
                                                                                                                                            <span
                                                                                                                                                style={{
                                                                                                                                                    color:
                                                                                                                                                        "rgb(89, 89, 89)",
                                                                                                                                                    fontSize:
                                                                                                                                                        "15px",
                                                                                                                                                }}>
                                                                                                                                                <span data-custom-class="body_text">
                                                                                                                                                    <span
                                                                                                                                                        style={{
                                                                                                                                                            color:
                                                                                                                                                                "rgb(89, 89, 89)",
                                                                                                                                                            fontSize:
                                                                                                                                                                "15px",
                                                                                                                                                        }}>
                                                                                                                                                        <span
                                                                                                                                                            style={{
                                                                                                                                                                color:
                                                                                                                                                                    "rgb(89, 89, 89)",
                                                                                                                                                                fontSize:
                                                                                                                                                                    "15px",
                                                                                                                                                            }}>
                                                                                                                                                            <span
                                                                                                                                                                style={{
                                                                                                                                                                    color:
                                                                                                                                                                        "rgb(89, 89, 89)",
                                                                                                                                                                    fontSize:
                                                                                                                                                                        "15px",
                                                                                                                                                                }}>
                                                                                                                                                                <span
                                                                                                                                                                    style={{
                                                                                                                                                                        fontSize:
                                                                                                                                                                            "15px",
                                                                                                                                                                    }}>
                                                                                                                                                                    <span
                                                                                                                                                                        style={{
                                                                                                                                                                            color:
                                                                                                                                                                                "rgb(89, 89, 89)",
                                                                                                                                                                        }}>
                                                                                                                                                                        <span
                                                                                                                                                                            style={{
                                                                                                                                                                                fontSize:
                                                                                                                                                                                    "15px",
                                                                                                                                                                            }}>
                                                                                                                                                                            <span
                                                                                                                                                                                style={{
                                                                                                                                                                                    color:
                                                                                                                                                                                        "rgb(89, 89, 89)",
                                                                                                                                                                                }}>
                                                                                                                                                                                <span data-custom-class="body_text">
                                                                                                                                                                                    <bdt className="block-component" />
                                                                                                                                                                                </span>
                                                                                                                                                                                <bdt className="block-component">
                                                                                                                                                                                    <span data-custom-class="body_text">
                                                                                                                                                                                        <bdt className="block-component" />
                                                                                                                                                                                    </span>
                                                                                                                                                                                </bdt>
                                                                                                                                                                            </span>
                                                                                                                                                                        </span>
                                                                                                                                                                    </span>
                                                                                                                                                                </span>
                                                                                                                                                            </span>
                                                                                                                                                        </span>
                                                                                                                                                    </span>
                                                                                                                                                </span>
                                                                                                                                            </span>
                                                                                                                                        </span>
                                                                                                                                    </div>
                                                                                                                                    <div
                                                                                                                                        style={{
                                                                                                                                            lineHeight: "1.5",
                                                                                                                                        }}>
                                                                                                                                        <br />
                                                                                                                                    </div>
                                                                                                                                    <div
                                                                                                                                        id="inforetain"
                                                                                                                                        style={{
                                                                                                                                            lineHeight: "1.5",
                                                                                                                                        }}>
                                                                                                                                        <span
                                                                                                                                            style={{
                                                                                                                                                color:
                                                                                                                                                    "rgb(127, 127, 127)",
                                                                                                                                            }}>
                                                                                                                                            <span
                                                                                                                                                style={{
                                                                                                                                                    color:
                                                                                                                                                        "rgb(89, 89, 89)",
                                                                                                                                                    fontSize:
                                                                                                                                                        "15px",
                                                                                                                                                }}>
                                                                                                                                                <span
                                                                                                                                                    style={{
                                                                                                                                                        color:
                                                                                                                                                            "rgb(89, 89, 89)",
                                                                                                                                                        fontSize:
                                                                                                                                                            "15px",
                                                                                                                                                    }}>
                                                                                                                                                    <span
                                                                                                                                                        style={{
                                                                                                                                                            color:
                                                                                                                                                                "rgb(89, 89, 89)",
                                                                                                                                                            fontSize:
                                                                                                                                                                "15px",
                                                                                                                                                        }}>
                                                                                                                                                        <span
                                                                                                                                                            id="control"
                                                                                                                                                            style={{
                                                                                                                                                                color:
                                                                                                                                                                    "rgb(0, 0, 0)",
                                                                                                                                                            }}>
                                                                                                                                                            <strong>
                                                                                                                                                                <span data-custom-class="heading_1">
                                                                                                                                                                    <h2>
                                                                                                                                                                        6.
                                                                                                                                                                        HOW
                                                                                                                                                                        LONG
                                                                                                                                                                        DO
                                                                                                                                                                        WE
                                                                                                                                                                        KEEP
                                                                                                                                                                        YOUR
                                                                                                                                                                        INFORMATION?
                                                                                                                                                                    </h2>
                                                                                                                                                                </span>
                                                                                                                                                            </strong>
                                                                                                                                                        </span>
                                                                                                                                                    </span>
                                                                                                                                                </span>
                                                                                                                                            </span>
                                                                                                                                        </span>
                                                                                                                                        <span
                                                                                                                                            style={{
                                                                                                                                                color:
                                                                                                                                                    "rgb(89, 89, 89)",
                                                                                                                                                fontSize:
                                                                                                                                                    "15px",
                                                                                                                                            }}>
                                                                                                                                            <span
                                                                                                                                                style={{
                                                                                                                                                    color:
                                                                                                                                                        "rgb(89, 89, 89)",
                                                                                                                                                    fontSize:
                                                                                                                                                        "15px",
                                                                                                                                                }}>
                                                                                                                                                <span data-custom-class="body_text">
                                                                                                                                                    <strong>
                                                                                                                                                        <em>
                                                                                                                                                            In Short:
                                                                                                                                                        </em>
                                                                                                                                                    </strong>
                                                                                                                                                    <em>
                                                                                                                                                        We keep your
                                                                                                                                                        information
                                                                                                                                                        for as long
                                                                                                                                                        as necessary
                                                                                                                                                        to{" "}
                                                                                                                                                        <bdt className="block-component" />
                                                                                                                                                        fulfil
                                                                                                                                                        <bdt className="else-block" />{" "}
                                                                                                                                                        the purposes
                                                                                                                                                        outlined in
                                                                                                                                                        this Privacy
                                                                                                                                                        Notice
                                                                                                                                                        unless
                                                                                                                                                        otherwise
                                                                                                                                                        required by
                                                                                                                                                        law.
                                                                                                                                                    </em>
                                                                                                                                                </span>
                                                                                                                                            </span>
                                                                                                                                        </span>
                                                                                                                                    </div>
                                                                                                                                    <div
                                                                                                                                        style={{
                                                                                                                                            lineHeight: "1.5",
                                                                                                                                        }}>
                                                                                                                                        <br />
                                                                                                                                    </div>
                                                                                                                                    <div
                                                                                                                                        style={{
                                                                                                                                            lineHeight: "1.5",
                                                                                                                                        }}>
                                                                                                                                        <span
                                                                                                                                            style={{
                                                                                                                                                color:
                                                                                                                                                    "rgb(89, 89, 89)",
                                                                                                                                                fontSize:
                                                                                                                                                    "15px",
                                                                                                                                            }}>
                                                                                                                                            <span
                                                                                                                                                style={{
                                                                                                                                                    color:
                                                                                                                                                        "rgb(89, 89, 89)",
                                                                                                                                                    fontSize:
                                                                                                                                                        "15px",
                                                                                                                                                }}>
                                                                                                                                                <span data-custom-class="body_text">
                                                                                                                                                    We will only
                                                                                                                                                    keep your
                                                                                                                                                    personal
                                                                                                                                                    information
                                                                                                                                                    for as long as
                                                                                                                                                    it is
                                                                                                                                                    necessary for
                                                                                                                                                    the purposes
                                                                                                                                                    set out in
                                                                                                                                                    this Privacy
                                                                                                                                                    Notice, unless
                                                                                                                                                    a longer
                                                                                                                                                    retention
                                                                                                                                                    period is
                                                                                                                                                    required or
                                                                                                                                                    permitted by
                                                                                                                                                    law (such as
                                                                                                                                                    tax,
                                                                                                                                                    accounting, or
                                                                                                                                                    other legal
                                                                                                                                                    requirements).
                                                                                                                                                    <bdt className="block-component" />{" "}
                                                                                                                                                    No purpose in
                                                                                                                                                    this notice
                                                                                                                                                    will require
                                                                                                                                                    us keeping
                                                                                                                                                    your personal
                                                                                                                                                    information
                                                                                                                                                    for longer
                                                                                                                                                    than{" "}
                                                                                                                                                    <span
                                                                                                                                                        style={{
                                                                                                                                                            fontSize:
                                                                                                                                                                "15px",
                                                                                                                                                        }}>
                                                                                                                                                        <span
                                                                                                                                                            style={{
                                                                                                                                                                color:
                                                                                                                                                                    "rgb(89, 89, 89)",
                                                                                                                                                            }}>
                                                                                                                                                            <span data-custom-class="body_text">
                                                                                                                                                                <bdt className="block-component" />
                                                                                                                                                                <bdt className="question">
                                                                                                                                                                    1 year
                                                                                                                                                                </bdt>
                                                                                                                                                                <bdt className="statement-end-if-in-editor" />
                                                                                                                                                            </span>
                                                                                                                                                        </span>
                                                                                                                                                    </span>
                                                                                                                                                    .
                                                                                                                                                </span>
                                                                                                                                            </span>
                                                                                                                                        </span>
                                                                                                                                    </div>
                                                                                                                                    <div
                                                                                                                                        style={{
                                                                                                                                            lineHeight: "1.5",
                                                                                                                                        }}>
                                                                                                                                        <br />
                                                                                                                                    </div>
                                                                                                                                    <div
                                                                                                                                        style={{
                                                                                                                                            lineHeight: "1.5",
                                                                                                                                        }}>
                                                                                                                                        <span
                                                                                                                                            style={{
                                                                                                                                                color:
                                                                                                                                                    "rgb(89, 89, 89)",
                                                                                                                                                fontSize:
                                                                                                                                                    "15px",
                                                                                                                                            }}>
                                                                                                                                            <span
                                                                                                                                                style={{
                                                                                                                                                    color:
                                                                                                                                                        "rgb(89, 89, 89)",
                                                                                                                                                    fontSize:
                                                                                                                                                        "15px",
                                                                                                                                                }}>
                                                                                                                                                <span data-custom-class="body_text">
                                                                                                                                                    When we have
                                                                                                                                                    no ongoing
                                                                                                                                                    legitimate
                                                                                                                                                    business need
                                                                                                                                                    to process
                                                                                                                                                    your personal
                                                                                                                                                    information,
                                                                                                                                                    we will either
                                                                                                                                                    delete or{" "}
                                                                                                                                                    <bdt className="block-component" />
                                                                                                                                                    anonymise
                                                                                                                                                    <bdt className="else-block" />{" "}
                                                                                                                                                    such
                                                                                                                                                    information,
                                                                                                                                                    or, if this is
                                                                                                                                                    not possible
                                                                                                                                                    (for example,
                                                                                                                                                    because your
                                                                                                                                                    personal
                                                                                                                                                    information
                                                                                                                                                    has been
                                                                                                                                                    stored in
                                                                                                                                                    backup
                                                                                                                                                    archives),
                                                                                                                                                    then we will
                                                                                                                                                    securely store
                                                                                                                                                    your personal
                                                                                                                                                    information
                                                                                                                                                    and isolate it
                                                                                                                                                    from any
                                                                                                                                                    further
                                                                                                                                                    processing
                                                                                                                                                    until deletion
                                                                                                                                                    is possible.
                                                                                                                                                    <span
                                                                                                                                                        style={{
                                                                                                                                                            color:
                                                                                                                                                                "rgb(89, 89, 89)",
                                                                                                                                                        }}>
                                                                                                                                                        <bdt className="block-component" />
                                                                                                                                                    </span>
                                                                                                                                                </span>
                                                                                                                                            </span>
                                                                                                                                        </span>
                                                                                                                                    </div>
                                                                                                                                    <div
                                                                                                                                        style={{
                                                                                                                                            lineHeight: "1.5",
                                                                                                                                        }}>
                                                                                                                                        <br />
                                                                                                                                    </div>
                                                                                                                                    <div
                                                                                                                                        id="infosafe"
                                                                                                                                        style={{
                                                                                                                                            lineHeight: "1.5",
                                                                                                                                        }}>
                                                                                                                                        <span
                                                                                                                                            style={{
                                                                                                                                                color:
                                                                                                                                                    "rgb(127, 127, 127)",
                                                                                                                                            }}>
                                                                                                                                            <span
                                                                                                                                                style={{
                                                                                                                                                    color:
                                                                                                                                                        "rgb(89, 89, 89)",
                                                                                                                                                    fontSize:
                                                                                                                                                        "15px",
                                                                                                                                                }}>
                                                                                                                                                <span
                                                                                                                                                    style={{
                                                                                                                                                        color:
                                                                                                                                                            "rgb(89, 89, 89)",
                                                                                                                                                        fontSize:
                                                                                                                                                            "15px",
                                                                                                                                                    }}>
                                                                                                                                                    <span
                                                                                                                                                        style={{
                                                                                                                                                            color:
                                                                                                                                                                "rgb(89, 89, 89)",
                                                                                                                                                            fontSize:
                                                                                                                                                                "15px",
                                                                                                                                                        }}>
                                                                                                                                                        <span
                                                                                                                                                            id="control"
                                                                                                                                                            style={{
                                                                                                                                                                color:
                                                                                                                                                                    "rgb(0, 0, 0)",
                                                                                                                                                            }}>
                                                                                                                                                            <strong>
                                                                                                                                                                <span data-custom-class="heading_1">
                                                                                                                                                                    <h2>
                                                                                                                                                                        7.
                                                                                                                                                                        HOW
                                                                                                                                                                        DO
                                                                                                                                                                        WE
                                                                                                                                                                        KEEP
                                                                                                                                                                        YOUR
                                                                                                                                                                        INFORMATION
                                                                                                                                                                        SAFE?
                                                                                                                                                                    </h2>
                                                                                                                                                                </span>
                                                                                                                                                            </strong>
                                                                                                                                                        </span>
                                                                                                                                                    </span>
                                                                                                                                                </span>
                                                                                                                                            </span>
                                                                                                                                        </span>
                                                                                                                                        <span
                                                                                                                                            style={{
                                                                                                                                                color:
                                                                                                                                                    "rgb(89, 89, 89)",
                                                                                                                                                fontSize:
                                                                                                                                                    "15px",
                                                                                                                                            }}>
                                                                                                                                            <span
                                                                                                                                                style={{
                                                                                                                                                    color:
                                                                                                                                                        "rgb(89, 89, 89)",
                                                                                                                                                    fontSize:
                                                                                                                                                        "15px",
                                                                                                                                                }}>
                                                                                                                                                <span data-custom-class="body_text">
                                                                                                                                                    <strong>
                                                                                                                                                        <em>
                                                                                                                                                            In Short:
                                                                                                                                                        </em>
                                                                                                                                                    </strong>
                                                                                                                                                    <em>
                                                                                                                                                        We aim to
                                                                                                                                                        protect your
                                                                                                                                                        personal
                                                                                                                                                        information
                                                                                                                                                        through a
                                                                                                                                                        system of{" "}
                                                                                                                                                        <bdt className="block-component" />
                                                                                                                                                        organisational
                                                                                                                                                        <bdt className="else-block" />{" "}
                                                                                                                                                        and
                                                                                                                                                        technical
                                                                                                                                                        security
                                                                                                                                                        measures.
                                                                                                                                                    </em>
                                                                                                                                                </span>
                                                                                                                                            </span>
                                                                                                                                        </span>
                                                                                                                                    </div>
                                                                                                                                    <div
                                                                                                                                        style={{
                                                                                                                                            lineHeight: "1.5",
                                                                                                                                        }}>
                                                                                                                                        <br />
                                                                                                                                    </div>
                                                                                                                                    <div
                                                                                                                                        style={{
                                                                                                                                            lineHeight: "1.5",
                                                                                                                                        }}>
                                                                                                                                        <span
                                                                                                                                            style={{
                                                                                                                                                color:
                                                                                                                                                    "rgb(89, 89, 89)",
                                                                                                                                                fontSize:
                                                                                                                                                    "15px",
                                                                                                                                            }}>
                                                                                                                                            <span
                                                                                                                                                style={{
                                                                                                                                                    color:
                                                                                                                                                        "rgb(89, 89, 89)",
                                                                                                                                                    fontSize:
                                                                                                                                                        "15px",
                                                                                                                                                }}>
                                                                                                                                                <span data-custom-class="body_text">
                                                                                                                                                    We have
                                                                                                                                                    implemented
                                                                                                                                                    appropriate
                                                                                                                                                    and reasonable
                                                                                                                                                    technical and{" "}
                                                                                                                                                    <bdt className="block-component" />
                                                                                                                                                    organisational
                                                                                                                                                    <bdt className="else-block" />{" "}
                                                                                                                                                    security
                                                                                                                                                    measures
                                                                                                                                                    designed to
                                                                                                                                                    protect the
                                                                                                                                                    security of
                                                                                                                                                    any personal
                                                                                                                                                    information we
                                                                                                                                                    process.
                                                                                                                                                    However,
                                                                                                                                                    despite our
                                                                                                                                                    safeguards and
                                                                                                                                                    efforts to
                                                                                                                                                    secure your
                                                                                                                                                    information,
                                                                                                                                                    no electronic
                                                                                                                                                    transmission
                                                                                                                                                    over the
                                                                                                                                                    Internet or
                                                                                                                                                    information
                                                                                                                                                    storage
                                                                                                                                                    technology can
                                                                                                                                                    be guaranteed
                                                                                                                                                    to be 100%
                                                                                                                                                    secure, so we
                                                                                                                                                    cannot promise
                                                                                                                                                    or guarantee
                                                                                                                                                    that hackers,
                                                                                                                                                    cybercriminals,
                                                                                                                                                    or other{" "}
                                                                                                                                                    <bdt className="block-component" />
                                                                                                                                                    unauthorised
                                                                                                                                                    <bdt className="else-block" />{" "}
                                                                                                                                                    third parties
                                                                                                                                                    will not be
                                                                                                                                                    able to defeat
                                                                                                                                                    our security
                                                                                                                                                    and improperly
                                                                                                                                                    collect,
                                                                                                                                                    access, steal,
                                                                                                                                                    or modify your
                                                                                                                                                    information.
                                                                                                                                                    Although we
                                                                                                                                                    will do our
                                                                                                                                                    best to
                                                                                                                                                    protect your
                                                                                                                                                    personal
                                                                                                                                                    information,
                                                                                                                                                    transmission
                                                                                                                                                    of personal
                                                                                                                                                    information to
                                                                                                                                                    and from our
                                                                                                                                                    Services is at
                                                                                                                                                    your own risk.
                                                                                                                                                    You should
                                                                                                                                                    only access
                                                                                                                                                    the Services
                                                                                                                                                    within a
                                                                                                                                                    secure
                                                                                                                                                    environment.
                                                                                                                                                    <span
                                                                                                                                                        style={{
                                                                                                                                                            color:
                                                                                                                                                                "rgb(89, 89, 89)",
                                                                                                                                                        }}>
                                                                                                                                                        <bdt className="statement-end-if-in-editor" />
                                                                                                                                                    </span>
                                                                                                                                                    <span
                                                                                                                                                        style={{
                                                                                                                                                            color:
                                                                                                                                                                "rgb(89, 89, 89)",
                                                                                                                                                            fontSize:
                                                                                                                                                                "15px",
                                                                                                                                                        }}>
                                                                                                                                                        <span data-custom-class="body_text">
                                                                                                                                                            <bdt className="block-component" />
                                                                                                                                                        </span>
                                                                                                                                                    </span>
                                                                                                                                                </span>
                                                                                                                                            </span>
                                                                                                                                        </span>
                                                                                                                                    </div>
                                                                                                                                    <div
                                                                                                                                        style={{
                                                                                                                                            lineHeight: "1.5",
                                                                                                                                        }}>
                                                                                                                                        <br />
                                                                                                                                    </div>
                                                                                                                                    <div
                                                                                                                                        id="infominors"
                                                                                                                                        style={{
                                                                                                                                            lineHeight: "1.5",
                                                                                                                                        }}>
                                                                                                                                        <span
                                                                                                                                            style={{
                                                                                                                                                color:
                                                                                                                                                    "rgb(127, 127, 127)",
                                                                                                                                            }}>
                                                                                                                                            <span
                                                                                                                                                style={{
                                                                                                                                                    color:
                                                                                                                                                        "rgb(89, 89, 89)",
                                                                                                                                                    fontSize:
                                                                                                                                                        "15px",
                                                                                                                                                }}>
                                                                                                                                                <span
                                                                                                                                                    style={{
                                                                                                                                                        color:
                                                                                                                                                            "rgb(89, 89, 89)",
                                                                                                                                                        fontSize:
                                                                                                                                                            "15px",
                                                                                                                                                    }}>
                                                                                                                                                    <span
                                                                                                                                                        style={{
                                                                                                                                                            color:
                                                                                                                                                                "rgb(89, 89, 89)",
                                                                                                                                                            fontSize:
                                                                                                                                                                "15px",
                                                                                                                                                        }}>
                                                                                                                                                        <span
                                                                                                                                                            id="control"
                                                                                                                                                            style={{
                                                                                                                                                                color:
                                                                                                                                                                    "rgb(0, 0, 0)",
                                                                                                                                                            }}>
                                                                                                                                                            <strong>
                                                                                                                                                                <span data-custom-class="heading_1">
                                                                                                                                                                    <h2>
                                                                                                                                                                        8.
                                                                                                                                                                        DO
                                                                                                                                                                        WE
                                                                                                                                                                        COLLECT
                                                                                                                                                                        INFORMATION
                                                                                                                                                                        FROM
                                                                                                                                                                        MINORS?
                                                                                                                                                                    </h2>
                                                                                                                                                                </span>
                                                                                                                                                            </strong>
                                                                                                                                                        </span>
                                                                                                                                                    </span>
                                                                                                                                                </span>
                                                                                                                                            </span>
                                                                                                                                        </span>
                                                                                                                                        <span
                                                                                                                                            style={{
                                                                                                                                                color:
                                                                                                                                                    "rgb(89, 89, 89)",
                                                                                                                                                fontSize:
                                                                                                                                                    "15px",
                                                                                                                                            }}>
                                                                                                                                            <span
                                                                                                                                                style={{
                                                                                                                                                    color:
                                                                                                                                                        "rgb(89, 89, 89)",
                                                                                                                                                    fontSize:
                                                                                                                                                        "15px",
                                                                                                                                                }}>
                                                                                                                                                <span data-custom-class="body_text">
                                                                                                                                                    <strong>
                                                                                                                                                        <em>
                                                                                                                                                            In Short:
                                                                                                                                                        </em>
                                                                                                                                                    </strong>
                                                                                                                                                    <em>
                                                                                                                                                        We do not
                                                                                                                                                        knowingly
                                                                                                                                                        collect data
                                                                                                                                                        from or
                                                                                                                                                        market to{" "}
                                                                                                                                                        <bdt className="block-component" />
                                                                                                                                                        children
                                                                                                                                                        under 18
                                                                                                                                                        years of age
                                                                                                                                                        <bdt className="else-block" />
                                                                                                                                                        .
                                                                                                                                                    </em>
                                                                                                                                                    <bdt className="block-component" />
                                                                                                                                                </span>
                                                                                                                                            </span>
                                                                                                                                        </span>
                                                                                                                                    </div>
                                                                                                                                    <div
                                                                                                                                        style={{
                                                                                                                                            lineHeight: "1.5",
                                                                                                                                        }}>
                                                                                                                                        <br />
                                                                                                                                    </div>
                                                                                                                                    <div
                                                                                                                                        style={{
                                                                                                                                            lineHeight: "1.5",
                                                                                                                                        }}>
                                                                                                                                        <span
                                                                                                                                            style={{
                                                                                                                                                color:
                                                                                                                                                    "rgb(89, 89, 89)",
                                                                                                                                                fontSize:
                                                                                                                                                    "15px",
                                                                                                                                            }}>
                                                                                                                                            <span
                                                                                                                                                style={{
                                                                                                                                                    color:
                                                                                                                                                        "rgb(89, 89, 89)",
                                                                                                                                                    fontSize:
                                                                                                                                                        "15px",
                                                                                                                                                }}>
                                                                                                                                                <span data-custom-class="body_text">
                                                                                                                                                    We do not
                                                                                                                                                    knowingly
                                                                                                                                                    collect,
                                                                                                                                                    solicit data
                                                                                                                                                    from, or
                                                                                                                                                    market to
                                                                                                                                                    children under
                                                                                                                                                    18 years of
                                                                                                                                                    age, nor do we
                                                                                                                                                    knowingly sell
                                                                                                                                                    such personal
                                                                                                                                                    information.
                                                                                                                                                    By using the
                                                                                                                                                    Services, you
                                                                                                                                                    represent that
                                                                                                                                                    you are at
                                                                                                                                                    least 18 or
                                                                                                                                                    that you are
                                                                                                                                                    the parent or
                                                                                                                                                    guardian of
                                                                                                                                                    such a minor
                                                                                                                                                    and consent to
                                                                                                                                                    such minor
                                                                                                                                                    dependent’s
                                                                                                                                                    use of the
                                                                                                                                                    Services. If
                                                                                                                                                    we learn that
                                                                                                                                                    personal
                                                                                                                                                    information
                                                                                                                                                    from users
                                                                                                                                                    less than 18
                                                                                                                                                    years of age
                                                                                                                                                    has been
                                                                                                                                                    collected, we
                                                                                                                                                    will
                                                                                                                                                    deactivate the
                                                                                                                                                    account and
                                                                                                                                                    take
                                                                                                                                                    reasonable
                                                                                                                                                    measures to
                                                                                                                                                    promptly
                                                                                                                                                    delete such
                                                                                                                                                    data from our
                                                                                                                                                    records. If
                                                                                                                                                    you become
                                                                                                                                                    aware of any
                                                                                                                                                    data we may
                                                                                                                                                    have collected
                                                                                                                                                    from children
                                                                                                                                                    under age 18,
                                                                                                                                                    please contact
                                                                                                                                                    us at{" "}
                                                                                                                                                    <span
                                                                                                                                                        style={{
                                                                                                                                                            color:
                                                                                                                                                                "rgb(89, 89, 89)",
                                                                                                                                                            fontSize:
                                                                                                                                                                "15px",
                                                                                                                                                        }}>
                                                                                                                                                        <span data-custom-class="body_text">
                                                                                                                                                            <bdt className="block-component" />
                                                                                                                                                            <bdt className="question">
                                                                                                                                                                CRSoftwareEngineer@outlook.com
                                                                                                                                                            </bdt>
                                                                                                                                                            <bdt className="else-block" />
                                                                                                                                                        </span>
                                                                                                                                                    </span>
                                                                                                                                                    .
                                                                                                                                                </span>
                                                                                                                                                <span data-custom-class="body_text">
                                                                                                                                                    <bdt className="else-block">
                                                                                                                                                        <bdt className="block-component" />
                                                                                                                                                    </bdt>
                                                                                                                                                </span>
                                                                                                                                            </span>
                                                                                                                                        </span>
                                                                                                                                    </div>
                                                                                                                                    <div
                                                                                                                                        style={{
                                                                                                                                            lineHeight: "1.5",
                                                                                                                                        }}>
                                                                                                                                        <br />
                                                                                                                                    </div>
                                                                                                                                    <div
                                                                                                                                        id="privacyrights"
                                                                                                                                        style={{
                                                                                                                                            lineHeight: "1.5",
                                                                                                                                        }}>
                                                                                                                                        <span
                                                                                                                                            style={{
                                                                                                                                                color:
                                                                                                                                                    "rgb(127, 127, 127)",
                                                                                                                                            }}>
                                                                                                                                            <span
                                                                                                                                                style={{
                                                                                                                                                    color:
                                                                                                                                                        "rgb(89, 89, 89)",
                                                                                                                                                    fontSize:
                                                                                                                                                        "15px",
                                                                                                                                                }}>
                                                                                                                                                <span
                                                                                                                                                    style={{
                                                                                                                                                        color:
                                                                                                                                                            "rgb(89, 89, 89)",
                                                                                                                                                        fontSize:
                                                                                                                                                            "15px",
                                                                                                                                                    }}>
                                                                                                                                                    <span
                                                                                                                                                        style={{
                                                                                                                                                            color:
                                                                                                                                                                "rgb(89, 89, 89)",
                                                                                                                                                            fontSize:
                                                                                                                                                                "15px",
                                                                                                                                                        }}>
                                                                                                                                                        <span
                                                                                                                                                            id="control"
                                                                                                                                                            style={{
                                                                                                                                                                color:
                                                                                                                                                                    "rgb(0, 0, 0)",
                                                                                                                                                            }}>
                                                                                                                                                            <strong>
                                                                                                                                                                <span data-custom-class="heading_1">
                                                                                                                                                                    <h2>
                                                                                                                                                                        9.
                                                                                                                                                                        WHAT
                                                                                                                                                                        ARE
                                                                                                                                                                        YOUR
                                                                                                                                                                        PRIVACY
                                                                                                                                                                        RIGHTS?
                                                                                                                                                                    </h2>
                                                                                                                                                                </span>
                                                                                                                                                            </strong>
                                                                                                                                                        </span>
                                                                                                                                                    </span>
                                                                                                                                                </span>
                                                                                                                                            </span>
                                                                                                                                        </span>
                                                                                                                                        <span
                                                                                                                                            style={{
                                                                                                                                                color:
                                                                                                                                                    "rgb(89, 89, 89)",
                                                                                                                                                fontSize:
                                                                                                                                                    "15px",
                                                                                                                                            }}>
                                                                                                                                            <span
                                                                                                                                                style={{
                                                                                                                                                    color:
                                                                                                                                                        "rgb(89, 89, 89)",
                                                                                                                                                    fontSize:
                                                                                                                                                        "15px",
                                                                                                                                                }}>
                                                                                                                                                <span data-custom-class="body_text">
                                                                                                                                                    <strong>
                                                                                                                                                        <em>
                                                                                                                                                            In Short:
                                                                                                                                                        </em>
                                                                                                                                                    </strong>
                                                                                                                                                    <em>
                                                                                                                                                        <span
                                                                                                                                                            style={{
                                                                                                                                                                color:
                                                                                                                                                                    "rgb(89, 89, 89)",
                                                                                                                                                            }}>
                                                                                                                                                            <span
                                                                                                                                                                style={{
                                                                                                                                                                    fontSize:
                                                                                                                                                                        "15px",
                                                                                                                                                                }}>
                                                                                                                                                                <span data-custom-class="body_text">
                                                                                                                                                                    <em>
                                                                                                                                                                        <bdt className="block-component" />
                                                                                                                                                                    </em>
                                                                                                                                                                </span>
                                                                                                                                                            </span>
                                                                                                                                                        </span>
                                                                                                                                                        <bdt className="block-component" />
                                                                                                                                                        In{" "}
                                                                                                                                                        <bdt className="statement-end-if-in-editor" />
                                                                                                                                                        some
                                                                                                                                                        regions,
                                                                                                                                                        such as{" "}
                                                                                                                                                        <bdt className="block-component" />
                                                                                                                                                        the European
                                                                                                                                                        Economic
                                                                                                                                                        Area (EEA),
                                                                                                                                                        United
                                                                                                                                                        Kingdom
                                                                                                                                                        (UK), and
                                                                                                                                                        Switzerland
                                                                                                                                                        <bdt className="block-component" />
                                                                                                                                                        , you have
                                                                                                                                                        rights that
                                                                                                                                                        allow you
                                                                                                                                                        greater
                                                                                                                                                        access to
                                                                                                                                                        and control
                                                                                                                                                        over your
                                                                                                                                                        personal
                                                                                                                                                        information.
                                                                                                                                                        <span
                                                                                                                                                            style={{
                                                                                                                                                                color:
                                                                                                                                                                    "rgb(89, 89, 89)",
                                                                                                                                                            }}>
                                                                                                                                                            <span
                                                                                                                                                                style={{
                                                                                                                                                                    fontSize:
                                                                                                                                                                        "15px",
                                                                                                                                                                }}>
                                                                                                                                                                <span data-custom-class="body_text">
                                                                                                                                                                    <em>
                                                                                                                                                                        <bdt className="statement-end-if-in-editor" />
                                                                                                                                                                    </em>
                                                                                                                                                                </span>
                                                                                                                                                            </span>
                                                                                                                                                        </span>
                                                                                                                                                        You may
                                                                                                                                                        review,
                                                                                                                                                        change, or
                                                                                                                                                        terminate
                                                                                                                                                        your account
                                                                                                                                                        at any time,
                                                                                                                                                        depending on
                                                                                                                                                        your
                                                                                                                                                        country,
                                                                                                                                                        province, or
                                                                                                                                                        state of
                                                                                                                                                        residence.
                                                                                                                                                    </em>
                                                                                                                                                    <span
                                                                                                                                                        style={{
                                                                                                                                                            color:
                                                                                                                                                                "rgb(89, 89, 89)",
                                                                                                                                                        }}>
                                                                                                                                                        <span
                                                                                                                                                            style={{
                                                                                                                                                                fontSize:
                                                                                                                                                                    "15px",
                                                                                                                                                            }}>
                                                                                                                                                            <bdt className="block-component" />
                                                                                                                                                        </span>
                                                                                                                                                    </span>
                                                                                                                                                </span>
                                                                                                                                            </span>
                                                                                                                                        </span>
                                                                                                                                    </div>
                                                                                                                                    <div
                                                                                                                                        style={{
                                                                                                                                            lineHeight: "1.5",
                                                                                                                                        }}>
                                                                                                                                        <br />
                                                                                                                                    </div>
                                                                                                                                    <div
                                                                                                                                        style={{
                                                                                                                                            lineHeight: "1.5",
                                                                                                                                        }}>
                                                                                                                                        <span
                                                                                                                                            style={{
                                                                                                                                                color:
                                                                                                                                                    "rgb(89, 89, 89)",
                                                                                                                                                fontSize:
                                                                                                                                                    "15px",
                                                                                                                                            }}>
                                                                                                                                            <span
                                                                                                                                                style={{
                                                                                                                                                    color:
                                                                                                                                                        "rgb(89, 89, 89)",
                                                                                                                                                    fontSize:
                                                                                                                                                        "15px",
                                                                                                                                                }}>
                                                                                                                                                <span data-custom-class="body_text">
                                                                                                                                                    In some
                                                                                                                                                    regions (like{" "}
                                                                                                                                                    <bdt className="block-component" />
                                                                                                                                                    the EEA, UK,
                                                                                                                                                    and
                                                                                                                                                    Switzerland
                                                                                                                                                    <bdt className="block-component" />
                                                                                                                                                    ), you have
                                                                                                                                                    certain rights
                                                                                                                                                    under
                                                                                                                                                    applicable
                                                                                                                                                    data
                                                                                                                                                    protection
                                                                                                                                                    laws. These
                                                                                                                                                    may include
                                                                                                                                                    the right (i)
                                                                                                                                                    to request
                                                                                                                                                    access and
                                                                                                                                                    obtain a copy
                                                                                                                                                    of your
                                                                                                                                                    personal
                                                                                                                                                    information,
                                                                                                                                                    (ii) to
                                                                                                                                                    request
                                                                                                                                                    rectification
                                                                                                                                                    or erasure;
                                                                                                                                                    (iii) to
                                                                                                                                                    restrict the
                                                                                                                                                    processing of
                                                                                                                                                    your personal
                                                                                                                                                    information;
                                                                                                                                                    (iv) if
                                                                                                                                                    applicable, to
                                                                                                                                                    data
                                                                                                                                                    portability;
                                                                                                                                                    and (v) not to
                                                                                                                                                    be subject to
                                                                                                                                                    automated
                                                                                                                                                    decision-making.
                                                                                                                                                    In certain
                                                                                                                                                    circumstances,
                                                                                                                                                    you may also
                                                                                                                                                    have the right
                                                                                                                                                    to object to
                                                                                                                                                    the processing
                                                                                                                                                    of your
                                                                                                                                                    personal
                                                                                                                                                    information.
                                                                                                                                                    You can make
                                                                                                                                                    such a request
                                                                                                                                                    by contacting
                                                                                                                                                    us by using
                                                                                                                                                    the contact
                                                                                                                                                    details
                                                                                                                                                    provided in
                                                                                                                                                    the section{" "}
                                                                                                                                                    <bdt className="block-component" />
                                                                                                                                                    '
                                                                                                                                                    <bdt className="else-block" />
                                                                                                                                                </span>
                                                                                                                                            </span>
                                                                                                                                        </span>
                                                                                                                                        <a
                                                                                                                                            data-custom-class="link"
                                                                                                                                            href="#contact">
                                                                                                                                            <span
                                                                                                                                                style={{
                                                                                                                                                    color:
                                                                                                                                                        "rgb(0, 58, 250)",
                                                                                                                                                    fontSize:
                                                                                                                                                        "15px",
                                                                                                                                                }}>
                                                                                                                                                <span
                                                                                                                                                    style={{
                                                                                                                                                        color:
                                                                                                                                                            "rgb(0, 58, 250)",
                                                                                                                                                        fontSize:
                                                                                                                                                            "15px",
                                                                                                                                                    }}>
                                                                                                                                                    <span data-custom-class="body_text">
                                                                                                                                                        HOW CAN YOU
                                                                                                                                                        CONTACT US
                                                                                                                                                        ABOUT THIS
                                                                                                                                                        NOTICE?
                                                                                                                                                    </span>
                                                                                                                                                </span>
                                                                                                                                            </span>
                                                                                                                                        </a>
                                                                                                                                        <span
                                                                                                                                            style={{
                                                                                                                                                color:
                                                                                                                                                    "rgb(89, 89, 89)",
                                                                                                                                                fontSize:
                                                                                                                                                    "15px",
                                                                                                                                            }}>
                                                                                                                                            <span
                                                                                                                                                style={{
                                                                                                                                                    color:
                                                                                                                                                        "rgb(89, 89, 89)",
                                                                                                                                                    fontSize:
                                                                                                                                                        "15px",
                                                                                                                                                }}>
                                                                                                                                                <span data-custom-class="body_text">
                                                                                                                                                    <bdt className="block-component" />
                                                                                                                                                    '
                                                                                                                                                    <bdt className="else-block" />{" "}
                                                                                                                                                    below.
                                                                                                                                                </span>
                                                                                                                                            </span>
                                                                                                                                        </span>
                                                                                                                                    </div>
                                                                                                                                    <div
                                                                                                                                        style={{
                                                                                                                                            lineHeight: "1.5",
                                                                                                                                        }}>
                                                                                                                                        <br />
                                                                                                                                    </div>
                                                                                                                                    <div
                                                                                                                                        style={{
                                                                                                                                            lineHeight: "1.5",
                                                                                                                                        }}>
                                                                                                                                        <span
                                                                                                                                            style={{
                                                                                                                                                color:
                                                                                                                                                    "rgb(89, 89, 89)",
                                                                                                                                                fontSize:
                                                                                                                                                    "15px",
                                                                                                                                            }}>
                                                                                                                                            <span
                                                                                                                                                style={{
                                                                                                                                                    color:
                                                                                                                                                        "rgb(89, 89, 89)",
                                                                                                                                                    fontSize:
                                                                                                                                                        "15px",
                                                                                                                                                }}>
                                                                                                                                                <span data-custom-class="body_text">
                                                                                                                                                    We will
                                                                                                                                                    consider and
                                                                                                                                                    act upon any
                                                                                                                                                    request in
                                                                                                                                                    accordance
                                                                                                                                                    with
                                                                                                                                                    applicable
                                                                                                                                                    data
                                                                                                                                                    protection
                                                                                                                                                    laws.
                                                                                                                                                    <bdt className="block-component" />
                                                                                                                                                </span>
                                                                                                                                            </span>
                                                                                                                                        </span>
                                                                                                                                    </div>
                                                                                                                                    <div
                                                                                                                                        style={{
                                                                                                                                            lineHeight: "1.5",
                                                                                                                                        }}>
                                                                                                                                        <span
                                                                                                                                            style={{
                                                                                                                                                color:
                                                                                                                                                    "rgb(89, 89, 89)",
                                                                                                                                                fontSize:
                                                                                                                                                    "15px",
                                                                                                                                            }}></span>
                                                                                                                                    </div>
                                                                                                                                    <div
                                                                                                                                        style={{
                                                                                                                                            lineHeight: "1.5",
                                                                                                                                        }}>
                                                                                                                                        <span
                                                                                                                                            style={{
                                                                                                                                                color:
                                                                                                                                                    "rgb(89, 89, 89)",
                                                                                                                                                fontSize:
                                                                                                                                                    "15px",
                                                                                                                                            }}>
                                                                                                                                            <span
                                                                                                                                                style={{
                                                                                                                                                    color:
                                                                                                                                                        "rgb(89, 89, 89)",
                                                                                                                                                    fontSize:
                                                                                                                                                        "15px",
                                                                                                                                                }}>
                                                                                                                                                <span data-custom-class="body_text">
                                                                                                                                                    If you are
                                                                                                                                                    located in the
                                                                                                                                                    EEA or UK and
                                                                                                                                                    you believe we
                                                                                                                                                    are unlawfully
                                                                                                                                                    processing
                                                                                                                                                    your personal
                                                                                                                                                    information,
                                                                                                                                                    you also have
                                                                                                                                                    the right to
                                                                                                                                                    complain to
                                                                                                                                                    your{" "}
                                                                                                                                                    <span
                                                                                                                                                        style={{
                                                                                                                                                            fontSize:
                                                                                                                                                                "15px",
                                                                                                                                                        }}>
                                                                                                                                                        <span
                                                                                                                                                            style={{
                                                                                                                                                                color:
                                                                                                                                                                    "rgb(0, 58, 250)",
                                                                                                                                                            }}>
                                                                                                                                                            <span data-custom-class="body_text">
                                                                                                                                                                <span
                                                                                                                                                                    style={{
                                                                                                                                                                        color:
                                                                                                                                                                            "rgb(0, 58, 250)",
                                                                                                                                                                    }}>
                                                                                                                                                                    <span data-custom-class="body_text">
                                                                                                                                                                        <a
                                                                                                                                                                            data-custom-class="link"
                                                                                                                                                                            href="https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm"
                                                                                                                                                                            rel="noopener noreferrer"
                                                                                                                                                                            target="_blank">
                                                                                                                                                                            <span
                                                                                                                                                                                style={{
                                                                                                                                                                                    fontSize:
                                                                                                                                                                                        "15px",
                                                                                                                                                                                }}>
                                                                                                                                                                                Member
                                                                                                                                                                                State
                                                                                                                                                                                data
                                                                                                                                                                                protection
                                                                                                                                                                                authority
                                                                                                                                                                            </span>
                                                                                                                                                                        </a>
                                                                                                                                                                    </span>
                                                                                                                                                                </span>
                                                                                                                                                            </span>
                                                                                                                                                        </span>
                                                                                                                                                    </span>{" "}
                                                                                                                                                    or
                                                                                                                                                </span>
                                                                                                                                            </span>
                                                                                                                                        </span>
                                                                                                                                        <a
                                                                                                                                            data-custom-class="link"
                                                                                                                                            href="https://ico.org.uk/make-a-complaint/data-protection-complaints/data-protection-complaints/"
                                                                                                                                            rel="noopener noreferrer"
                                                                                                                                            target="_blank">
                                                                                                                                            <span
                                                                                                                                                style={{
                                                                                                                                                    color:
                                                                                                                                                        "rgb(0, 58, 250)",
                                                                                                                                                    fontSize:
                                                                                                                                                        "15px",
                                                                                                                                                }}>
                                                                                                                                                <span
                                                                                                                                                    style={{
                                                                                                                                                        color:
                                                                                                                                                            "rgb(0, 58, 250)",
                                                                                                                                                        fontSize:
                                                                                                                                                            "15px",
                                                                                                                                                    }}>
                                                                                                                                                    <span data-custom-class="body_text">
                                                                                                                                                        UK data
                                                                                                                                                        protection
                                                                                                                                                        authority
                                                                                                                                                    </span>
                                                                                                                                                </span>
                                                                                                                                            </span>
                                                                                                                                        </a>
                                                                                                                                        <span
                                                                                                                                            style={{
                                                                                                                                                color:
                                                                                                                                                    "rgb(89, 89, 89)",
                                                                                                                                                fontSize:
                                                                                                                                                    "15px",
                                                                                                                                            }}>
                                                                                                                                            <span
                                                                                                                                                style={{
                                                                                                                                                    color:
                                                                                                                                                        "rgb(89, 89, 89)",
                                                                                                                                                    fontSize:
                                                                                                                                                        "15px",
                                                                                                                                                }}>
                                                                                                                                                <span data-custom-class="body_text">
                                                                                                                                                    .
                                                                                                                                                </span>
                                                                                                                                            </span>
                                                                                                                                        </span>
                                                                                                                                    </div>
                                                                                                                                    <div
                                                                                                                                        style={{
                                                                                                                                            lineHeight: "1.5",
                                                                                                                                        }}>
                                                                                                                                        <br />
                                                                                                                                    </div>
                                                                                                                                    <div
                                                                                                                                        style={{
                                                                                                                                            lineHeight: "1.5",
                                                                                                                                        }}>
                                                                                                                                        <span
                                                                                                                                            style={{
                                                                                                                                                color:
                                                                                                                                                    "rgb(89, 89, 89)",
                                                                                                                                                fontSize:
                                                                                                                                                    "15px",
                                                                                                                                            }}>
                                                                                                                                            <span
                                                                                                                                                style={{
                                                                                                                                                    color:
                                                                                                                                                        "rgb(89, 89, 89)",
                                                                                                                                                    fontSize:
                                                                                                                                                        "15px",
                                                                                                                                                }}>
                                                                                                                                                <span data-custom-class="body_text">
                                                                                                                                                    If you are
                                                                                                                                                    located in
                                                                                                                                                    Switzerland,
                                                                                                                                                    you may
                                                                                                                                                    contact the{" "}
                                                                                                                                                    <span
                                                                                                                                                        style={{
                                                                                                                                                            fontSize:
                                                                                                                                                                "15px",
                                                                                                                                                        }}>
                                                                                                                                                        <span
                                                                                                                                                            style={{
                                                                                                                                                                color:
                                                                                                                                                                    "rgb(0, 58, 250)",
                                                                                                                                                            }}>
                                                                                                                                                            <span data-custom-class="body_text">
                                                                                                                                                                <span
                                                                                                                                                                    style={{
                                                                                                                                                                        color:
                                                                                                                                                                            "rgb(0, 58, 250)",
                                                                                                                                                                    }}>
                                                                                                                                                                    <span data-custom-class="body_text">
                                                                                                                                                                        <span
                                                                                                                                                                            style={{
                                                                                                                                                                                color:
                                                                                                                                                                                    "rgb(0, 58, 250)",
                                                                                                                                                                                fontSize:
                                                                                                                                                                                    "15px",
                                                                                                                                                                            }}>
                                                                                                                                                                            <a
                                                                                                                                                                                data-custom-class="link"
                                                                                                                                                                                href="https://www.edoeb.admin.ch/edoeb/en/home.html"
                                                                                                                                                                                rel="noopener noreferrer"
                                                                                                                                                                                target="_blank">
                                                                                                                                                                                Federal
                                                                                                                                                                                Data
                                                                                                                                                                                Protection
                                                                                                                                                                                and
                                                                                                                                                                                Information
                                                                                                                                                                                Commissioner
                                                                                                                                                                            </a>
                                                                                                                                                                        </span>
                                                                                                                                                                    </span>
                                                                                                                                                                </span>
                                                                                                                                                            </span>
                                                                                                                                                        </span>
                                                                                                                                                    </span>
                                                                                                                                                    .
                                                                                                                                                </span>
                                                                                                                                            </span>
                                                                                                                                        </span>
                                                                                                                                    </div>
                                                                                                                                    <div
                                                                                                                                        style={{
                                                                                                                                            lineHeight: "1.5",
                                                                                                                                        }}>
                                                                                                                                        <br />
                                                                                                                                    </div>
                                                                                                                                    <div
                                                                                                                                        id="withdrawconsent"
                                                                                                                                        style={{
                                                                                                                                            lineHeight: "1.5",
                                                                                                                                        }}>
                                                                                                                                        <span
                                                                                                                                            style={{
                                                                                                                                                color:
                                                                                                                                                    "rgb(89, 89, 89)",
                                                                                                                                                fontSize:
                                                                                                                                                    "15px",
                                                                                                                                            }}>
                                                                                                                                            <span
                                                                                                                                                style={{
                                                                                                                                                    color:
                                                                                                                                                        "rgb(89, 89, 89)",
                                                                                                                                                    fontSize:
                                                                                                                                                        "15px",
                                                                                                                                                }}>
                                                                                                                                                <span data-custom-class="body_text">
                                                                                                                                                    <strong>
                                                                                                                                                        <u>
                                                                                                                                                            Withdrawing
                                                                                                                                                            your
                                                                                                                                                            consent:
                                                                                                                                                        </u>
                                                                                                                                                    </strong>{" "}
                                                                                                                                                    If we are
                                                                                                                                                    relying on
                                                                                                                                                    your consent
                                                                                                                                                    to process
                                                                                                                                                    your personal
                                                                                                                                                    information,
                                                                                                                                                    <bdt className="block-component" />
                                                                                                                                                    <bdt className="else-block" />{" "}
                                                                                                                                                    you have the
                                                                                                                                                    right to
                                                                                                                                                    withdraw your
                                                                                                                                                    consent at any
                                                                                                                                                    time. You can
                                                                                                                                                    withdraw your
                                                                                                                                                    consent at any
                                                                                                                                                    time by
                                                                                                                                                    contacting us
                                                                                                                                                    by using the
                                                                                                                                                    contact
                                                                                                                                                    details
                                                                                                                                                    provided in
                                                                                                                                                    the section{" "}
                                                                                                                                                    <bdt className="block-component" />
                                                                                                                                                    '
                                                                                                                                                    <bdt className="else-block" />
                                                                                                                                                </span>
                                                                                                                                            </span>
                                                                                                                                        </span>
                                                                                                                                        <a
                                                                                                                                            data-custom-class="link"
                                                                                                                                            href="#contact">
                                                                                                                                            <span
                                                                                                                                                style={{
                                                                                                                                                    color:
                                                                                                                                                        "rgb(0, 58, 250)",
                                                                                                                                                    fontSize:
                                                                                                                                                        "15px",
                                                                                                                                                }}>
                                                                                                                                                <span
                                                                                                                                                    style={{
                                                                                                                                                        color:
                                                                                                                                                            "rgb(0, 58, 250)",
                                                                                                                                                        fontSize:
                                                                                                                                                            "15px",
                                                                                                                                                    }}>
                                                                                                                                                    <span data-custom-class="body_text">
                                                                                                                                                        HOW CAN YOU
                                                                                                                                                        CONTACT US
                                                                                                                                                        ABOUT THIS
                                                                                                                                                        NOTICE?
                                                                                                                                                    </span>
                                                                                                                                                </span>
                                                                                                                                            </span>
                                                                                                                                        </a>
                                                                                                                                        <span
                                                                                                                                            style={{
                                                                                                                                                color:
                                                                                                                                                    "rgb(89, 89, 89)",
                                                                                                                                                fontSize:
                                                                                                                                                    "15px",
                                                                                                                                            }}>
                                                                                                                                            <span
                                                                                                                                                style={{
                                                                                                                                                    color:
                                                                                                                                                        "rgb(89, 89, 89)",
                                                                                                                                                    fontSize:
                                                                                                                                                        "15px",
                                                                                                                                                }}>
                                                                                                                                                <span data-custom-class="body_text">
                                                                                                                                                    <bdt className="block-component" />
                                                                                                                                                    '
                                                                                                                                                    <bdt className="else-block" />{" "}
                                                                                                                                                    below
                                                                                                                                                    <bdt className="block-component" />
                                                                                                                                                    .
                                                                                                                                                </span>
                                                                                                                                            </span>
                                                                                                                                        </span>
                                                                                                                                    </div>
                                                                                                                                    <div
                                                                                                                                        style={{
                                                                                                                                            lineHeight: "1.5",
                                                                                                                                        }}>
                                                                                                                                        <br />
                                                                                                                                    </div>
                                                                                                                                    <div
                                                                                                                                        style={{
                                                                                                                                            lineHeight: "1.5",
                                                                                                                                        }}>
                                                                                                                                        <span
                                                                                                                                            style={{
                                                                                                                                                fontSize:
                                                                                                                                                    "15px",
                                                                                                                                            }}>
                                                                                                                                            <span data-custom-class="body_text">
                                                                                                                                                However, please
                                                                                                                                                note that this
                                                                                                                                                will not affect
                                                                                                                                                the lawfulness
                                                                                                                                                of the
                                                                                                                                                processing
                                                                                                                                                before its
                                                                                                                                                withdrawal nor,
                                                                                                                                                <bdt className="block-component" />
                                                                                                                                                <bdt className="else-block" />{" "}
                                                                                                                                                will it affect
                                                                                                                                                the processing
                                                                                                                                                of your personal
                                                                                                                                                information
                                                                                                                                                conducted in
                                                                                                                                                reliance on
                                                                                                                                                lawful
                                                                                                                                                processing
                                                                                                                                                grounds other
                                                                                                                                                than consent.
                                                                                                                                                <bdt className="block-component" />
                                                                                                                                            </span>
                                                                                                                                        </span>
                                                                                                                                        <bdt className="block-component">
                                                                                                                                            <span
                                                                                                                                                style={{
                                                                                                                                                    fontSize:
                                                                                                                                                        "15px",
                                                                                                                                                }}>
                                                                                                                                                <span data-custom-class="body_text" />
                                                                                                                                            </span>
                                                                                                                                        </bdt>
                                                                                                                                        <span
                                                                                                                                            style={{
                                                                                                                                                color:
                                                                                                                                                    "rgb(89, 89, 89)",
                                                                                                                                                fontSize:
                                                                                                                                                    "15px",
                                                                                                                                            }}>
                                                                                                                                            <span
                                                                                                                                                style={{
                                                                                                                                                    color:
                                                                                                                                                        "rgb(89, 89, 89)",
                                                                                                                                                    fontSize:
                                                                                                                                                        "15px",
                                                                                                                                                }}>
                                                                                                                                                <span data-custom-class="body_text">
                                                                                                                                                    <span
                                                                                                                                                        style={{
                                                                                                                                                            fontSize:
                                                                                                                                                                "15px",
                                                                                                                                                        }}>
                                                                                                                                                        <span
                                                                                                                                                            style={{
                                                                                                                                                                color:
                                                                                                                                                                    "rgb(89, 89, 89)",
                                                                                                                                                            }}>
                                                                                                                                                            <span
                                                                                                                                                                style={{
                                                                                                                                                                    fontSize:
                                                                                                                                                                        "15px",
                                                                                                                                                                }}>
                                                                                                                                                                <span
                                                                                                                                                                    style={{
                                                                                                                                                                        color:
                                                                                                                                                                            "rgb(89, 89, 89)",
                                                                                                                                                                    }}>
                                                                                                                                                                    <span data-custom-class="body_text">
                                                                                                                                                                        <span
                                                                                                                                                                            style={{
                                                                                                                                                                                fontSize:
                                                                                                                                                                                    "15px",
                                                                                                                                                                            }}>
                                                                                                                                                                            <span
                                                                                                                                                                                style={{
                                                                                                                                                                                    color:
                                                                                                                                                                                        "rgb(89, 89, 89)",
                                                                                                                                                                                }}>
                                                                                                                                                                                <bdt className="block-component" />
                                                                                                                                                                            </span>
                                                                                                                                                                        </span>
                                                                                                                                                                    </span>
                                                                                                                                                                </span>
                                                                                                                                                            </span>
                                                                                                                                                        </span>
                                                                                                                                                    </span>
                                                                                                                                                </span>
                                                                                                                                            </span>
                                                                                                                                        </span>
                                                                                                                                        <bdt className="block-component">
                                                                                                                                            <span
                                                                                                                                                style={{
                                                                                                                                                    fontSize:
                                                                                                                                                        "15px",
                                                                                                                                                }}>
                                                                                                                                                <span data-custom-class="body_text" />
                                                                                                                                            </span>
                                                                                                                                        </bdt>
                                                                                                                                    </div>
                                                                                                                                    <div
                                                                                                                                        style={{
                                                                                                                                            lineHeight: "1.5",
                                                                                                                                        }}>
                                                                                                                                        <br />
                                                                                                                                    </div>
                                                                                                                                    <div
                                                                                                                                        style={{
                                                                                                                                            lineHeight: "1.5",
                                                                                                                                        }}>
                                                                                                                                        <span data-custom-class="body_text">
                                                                                                                                            <span
                                                                                                                                                style={{
                                                                                                                                                    fontSize:
                                                                                                                                                        "15px",
                                                                                                                                                }}>
                                                                                                                                                If you have
                                                                                                                                                questions or
                                                                                                                                                comments about
                                                                                                                                                your privacy
                                                                                                                                                rights, you may
                                                                                                                                                email us at{" "}
                                                                                                                                                <bdt className="question">
                                                                                                                                                    CRSoftwareEngineer@outlook.com
                                                                                                                                                </bdt>
                                                                                                                                                .
                                                                                                                                            </span>
                                                                                                                                        </span>
                                                                                                                                        <bdt className="statement-end-if-in-editor">
                                                                                                                                            <span
                                                                                                                                                style={{
                                                                                                                                                    fontSize:
                                                                                                                                                        "15px",
                                                                                                                                                }}>
                                                                                                                                                <span data-custom-class="body_text" />
                                                                                                                                            </span>
                                                                                                                                        </bdt>
                                                                                                                                    </div>
                                                                                                                                    <div
                                                                                                                                        style={{
                                                                                                                                            lineHeight: "1.5",
                                                                                                                                        }}>
                                                                                                                                        <br />
                                                                                                                                    </div>
                                                                                                                                    <div
                                                                                                                                        id="DNT"
                                                                                                                                        style={{
                                                                                                                                            lineHeight: "1.5",
                                                                                                                                        }}>
                                                                                                                                        <span
                                                                                                                                            style={{
                                                                                                                                                color:
                                                                                                                                                    "rgb(127, 127, 127)",
                                                                                                                                            }}>
                                                                                                                                            <span
                                                                                                                                                style={{
                                                                                                                                                    color:
                                                                                                                                                        "rgb(89, 89, 89)",
                                                                                                                                                    fontSize:
                                                                                                                                                        "15px",
                                                                                                                                                }}>
                                                                                                                                                <span
                                                                                                                                                    style={{
                                                                                                                                                        color:
                                                                                                                                                            "rgb(89, 89, 89)",
                                                                                                                                                        fontSize:
                                                                                                                                                            "15px",
                                                                                                                                                    }}>
                                                                                                                                                    <span
                                                                                                                                                        style={{
                                                                                                                                                            color:
                                                                                                                                                                "rgb(89, 89, 89)",
                                                                                                                                                            fontSize:
                                                                                                                                                                "15px",
                                                                                                                                                        }}>
                                                                                                                                                        <span
                                                                                                                                                            id="control"
                                                                                                                                                            style={{
                                                                                                                                                                color:
                                                                                                                                                                    "rgb(0, 0, 0)",
                                                                                                                                                            }}>
                                                                                                                                                            <strong>
                                                                                                                                                                <span data-custom-class="heading_1">
                                                                                                                                                                    <h2>
                                                                                                                                                                        10.
                                                                                                                                                                        CONTROLS
                                                                                                                                                                        FOR
                                                                                                                                                                        DO-NOT-TRACK
                                                                                                                                                                        FEATURES
                                                                                                                                                                    </h2>
                                                                                                                                                                </span>
                                                                                                                                                            </strong>
                                                                                                                                                        </span>
                                                                                                                                                    </span>
                                                                                                                                                </span>
                                                                                                                                            </span>
                                                                                                                                        </span>
                                                                                                                                        <span
                                                                                                                                            style={{
                                                                                                                                                color:
                                                                                                                                                    "rgb(89, 89, 89)",
                                                                                                                                                fontSize:
                                                                                                                                                    "15px",
                                                                                                                                            }}>
                                                                                                                                            <span
                                                                                                                                                style={{
                                                                                                                                                    color:
                                                                                                                                                        "rgb(89, 89, 89)",
                                                                                                                                                    fontSize:
                                                                                                                                                        "15px",
                                                                                                                                                }}>
                                                                                                                                                <span data-custom-class="body_text">
                                                                                                                                                    Most web
                                                                                                                                                    browsers and
                                                                                                                                                    some mobile
                                                                                                                                                    operating
                                                                                                                                                    systems and
                                                                                                                                                    mobile
                                                                                                                                                    applications
                                                                                                                                                    include a
                                                                                                                                                    Do-Not-Track (
                                                                                                                                                    <bdt className="block-component" />
                                                                                                                                                    'DNT'
                                                                                                                                                    <bdt className="else-block" />
                                                                                                                                                    ) feature or
                                                                                                                                                    setting you
                                                                                                                                                    can activate
                                                                                                                                                    to signal your
                                                                                                                                                    privacy
                                                                                                                                                    preference not
                                                                                                                                                    to have data
                                                                                                                                                    about your
                                                                                                                                                    online
                                                                                                                                                    browsing
                                                                                                                                                    activities
                                                                                                                                                    monitored and
                                                                                                                                                    collected. At
                                                                                                                                                    this stage, no
                                                                                                                                                    uniform
                                                                                                                                                    technology
                                                                                                                                                    standard for{" "}
                                                                                                                                                    <bdt className="block-component" />
                                                                                                                                                    recognising
                                                                                                                                                    <bdt className="else-block" />{" "}
                                                                                                                                                    and
                                                                                                                                                    implementing
                                                                                                                                                    DNT signals
                                                                                                                                                    has been{" "}
                                                                                                                                                    <bdt className="block-component" />
                                                                                                                                                    finalised
                                                                                                                                                    <bdt className="else-block" />
                                                                                                                                                    . As such, we
                                                                                                                                                    do not
                                                                                                                                                    currently
                                                                                                                                                    respond to DNT
                                                                                                                                                    browser
                                                                                                                                                    signals or any
                                                                                                                                                    other
                                                                                                                                                    mechanism that
                                                                                                                                                    automatically
                                                                                                                                                    communicates
                                                                                                                                                    your choice
                                                                                                                                                    not to be
                                                                                                                                                    tracked
                                                                                                                                                    online. If a
                                                                                                                                                    standard for
                                                                                                                                                    online
                                                                                                                                                    tracking is
                                                                                                                                                    adopted that
                                                                                                                                                    we must follow
                                                                                                                                                    in the future,
                                                                                                                                                    we will inform
                                                                                                                                                    you about that
                                                                                                                                                    practice in a
                                                                                                                                                    revised
                                                                                                                                                    version of
                                                                                                                                                    this Privacy
                                                                                                                                                    Notice.
                                                                                                                                                </span>
                                                                                                                                            </span>
                                                                                                                                        </span>
                                                                                                                                        <bdt className="block-component">
                                                                                                                                            <span
                                                                                                                                                style={{
                                                                                                                                                    fontSize:
                                                                                                                                                        "15px",
                                                                                                                                                }}
                                                                                                                                            />
                                                                                                                                        </bdt>
                                                                                                                                    </div>
                                                                                                                                    <div
                                                                                                                                        style={{
                                                                                                                                            lineHeight: "1.5",
                                                                                                                                        }}>
                                                                                                                                        <span
                                                                                                                                            style={{
                                                                                                                                                color:
                                                                                                                                                    "rgb(89, 89, 89)",
                                                                                                                                                fontSize:
                                                                                                                                                    "15px",
                                                                                                                                            }}>
                                                                                                                                            <span
                                                                                                                                                style={{
                                                                                                                                                    color:
                                                                                                                                                        "rgb(89, 89, 89)",
                                                                                                                                                    fontSize:
                                                                                                                                                        "15px",
                                                                                                                                                }}>
                                                                                                                                                <span data-custom-class="body_text">
                                                                                                                                                    <bdt className="block-component" />
                                                                                                                                                </span>
                                                                                                                                            </span>
                                                                                                                                        </span>
                                                                                                                                        <bdt className="block-component">
                                                                                                                                            <span
                                                                                                                                                style={{
                                                                                                                                                    fontSize:
                                                                                                                                                        "15px",
                                                                                                                                                }}
                                                                                                                                            />
                                                                                                                                        </bdt>
                                                                                                                                        <bdt className="block-component">
                                                                                                                                            <span
                                                                                                                                                style={{
                                                                                                                                                    fontSize:
                                                                                                                                                        "15px",
                                                                                                                                                }}
                                                                                                                                            />
                                                                                                                                        </bdt>
                                                                                                                                    </div>
                                                                                                                                    <div
                                                                                                                                        style={{
                                                                                                                                            lineHeight: "1.5",
                                                                                                                                        }}>
                                                                                                                                        <br />
                                                                                                                                    </div>
                                                                                                                                    <div
                                                                                                                                        id="policyupdates"
                                                                                                                                        style={{
                                                                                                                                            lineHeight: "1.5",
                                                                                                                                        }}>
                                                                                                                                        <span
                                                                                                                                            style={{
                                                                                                                                                color:
                                                                                                                                                    "rgb(127, 127, 127)",
                                                                                                                                            }}>
                                                                                                                                            <span
                                                                                                                                                style={{
                                                                                                                                                    color:
                                                                                                                                                        "rgb(89, 89, 89)",
                                                                                                                                                    fontSize:
                                                                                                                                                        "15px",
                                                                                                                                                }}>
                                                                                                                                                <span
                                                                                                                                                    style={{
                                                                                                                                                        color:
                                                                                                                                                            "rgb(89, 89, 89)",
                                                                                                                                                        fontSize:
                                                                                                                                                            "15px",
                                                                                                                                                    }}>
                                                                                                                                                    <span
                                                                                                                                                        style={{
                                                                                                                                                            color:
                                                                                                                                                                "rgb(89, 89, 89)",
                                                                                                                                                            fontSize:
                                                                                                                                                                "15px",
                                                                                                                                                        }}>
                                                                                                                                                        <span
                                                                                                                                                            id="control"
                                                                                                                                                            style={{
                                                                                                                                                                color:
                                                                                                                                                                    "rgb(0, 0, 0)",
                                                                                                                                                            }}>
                                                                                                                                                            <strong>
                                                                                                                                                                <span data-custom-class="heading_1">
                                                                                                                                                                    <h2>
                                                                                                                                                                        11.
                                                                                                                                                                        DO
                                                                                                                                                                        WE
                                                                                                                                                                        MAKE
                                                                                                                                                                        UPDATES
                                                                                                                                                                        TO
                                                                                                                                                                        THIS
                                                                                                                                                                        NOTICE?
                                                                                                                                                                    </h2>
                                                                                                                                                                </span>
                                                                                                                                                            </strong>
                                                                                                                                                        </span>
                                                                                                                                                    </span>
                                                                                                                                                </span>
                                                                                                                                            </span>
                                                                                                                                        </span>
                                                                                                                                        <span
                                                                                                                                            style={{
                                                                                                                                                color:
                                                                                                                                                    "rgb(89, 89, 89)",
                                                                                                                                                fontSize:
                                                                                                                                                    "15px",
                                                                                                                                            }}>
                                                                                                                                            <span
                                                                                                                                                style={{
                                                                                                                                                    color:
                                                                                                                                                        "rgb(89, 89, 89)",
                                                                                                                                                    fontSize:
                                                                                                                                                        "15px",
                                                                                                                                                }}>
                                                                                                                                                <span data-custom-class="body_text">
                                                                                                                                                    <em>
                                                                                                                                                        <strong>
                                                                                                                                                            In Short:
                                                                                                                                                        </strong>
                                                                                                                                                        Yes, we will
                                                                                                                                                        update this
                                                                                                                                                        notice as
                                                                                                                                                        necessary to
                                                                                                                                                        stay
                                                                                                                                                        compliant
                                                                                                                                                        with
                                                                                                                                                        relevant
                                                                                                                                                        laws.
                                                                                                                                                    </em>
                                                                                                                                                </span>
                                                                                                                                            </span>
                                                                                                                                        </span>
                                                                                                                                    </div>
                                                                                                                                    <div
                                                                                                                                        style={{
                                                                                                                                            lineHeight: "1.5",
                                                                                                                                        }}>
                                                                                                                                        <br />
                                                                                                                                    </div>
                                                                                                                                    <div
                                                                                                                                        style={{
                                                                                                                                            lineHeight: "1.5",
                                                                                                                                        }}>
                                                                                                                                        <span
                                                                                                                                            style={{
                                                                                                                                                color:
                                                                                                                                                    "rgb(89, 89, 89)",
                                                                                                                                                fontSize:
                                                                                                                                                    "15px",
                                                                                                                                            }}>
                                                                                                                                            <span
                                                                                                                                                style={{
                                                                                                                                                    color:
                                                                                                                                                        "rgb(89, 89, 89)",
                                                                                                                                                    fontSize:
                                                                                                                                                        "15px",
                                                                                                                                                }}>
                                                                                                                                                <span data-custom-class="body_text">
                                                                                                                                                    We may update
                                                                                                                                                    this Privacy
                                                                                                                                                    Notice from
                                                                                                                                                    time to time.
                                                                                                                                                    The updated
                                                                                                                                                    version will
                                                                                                                                                    be indicated
                                                                                                                                                    by an updated{" "}
                                                                                                                                                    <bdt className="block-component" />
                                                                                                                                                    'Revised'
                                                                                                                                                    <bdt className="else-block" />{" "}
                                                                                                                                                    date at the
                                                                                                                                                    top of this
                                                                                                                                                    Privacy
                                                                                                                                                    Notice. If we
                                                                                                                                                    make material
                                                                                                                                                    changes to
                                                                                                                                                    this Privacy
                                                                                                                                                    Notice, we may
                                                                                                                                                    notify you
                                                                                                                                                    either by
                                                                                                                                                    prominently
                                                                                                                                                    posting a
                                                                                                                                                    notice of such
                                                                                                                                                    changes or by
                                                                                                                                                    directly
                                                                                                                                                    sending you a
                                                                                                                                                    notification.
                                                                                                                                                    We encourage
                                                                                                                                                    you to review
                                                                                                                                                    this Privacy
                                                                                                                                                    Notice
                                                                                                                                                    frequently to
                                                                                                                                                    be informed of
                                                                                                                                                    how we are
                                                                                                                                                    protecting
                                                                                                                                                    your
                                                                                                                                                    information.
                                                                                                                                                </span>
                                                                                                                                            </span>
                                                                                                                                        </span>
                                                                                                                                    </div>
                                                                                                                                    <div
                                                                                                                                        style={{
                                                                                                                                            lineHeight: "1.5",
                                                                                                                                        }}>
                                                                                                                                        <br />
                                                                                                                                    </div>
                                                                                                                                    <div
                                                                                                                                        id="contact"
                                                                                                                                        style={{
                                                                                                                                            lineHeight: "1.5",
                                                                                                                                        }}>
                                                                                                                                        <span
                                                                                                                                            style={{
                                                                                                                                                color:
                                                                                                                                                    "rgb(127, 127, 127)",
                                                                                                                                            }}>
                                                                                                                                            <span
                                                                                                                                                style={{
                                                                                                                                                    color:
                                                                                                                                                        "rgb(89, 89, 89)",
                                                                                                                                                    fontSize:
                                                                                                                                                        "15px",
                                                                                                                                                }}>
                                                                                                                                                <span
                                                                                                                                                    style={{
                                                                                                                                                        color:
                                                                                                                                                            "rgb(89, 89, 89)",
                                                                                                                                                        fontSize:
                                                                                                                                                            "15px",
                                                                                                                                                    }}>
                                                                                                                                                    <span
                                                                                                                                                        style={{
                                                                                                                                                            color:
                                                                                                                                                                "rgb(89, 89, 89)",
                                                                                                                                                            fontSize:
                                                                                                                                                                "15px",
                                                                                                                                                        }}>
                                                                                                                                                        <span
                                                                                                                                                            id="control"
                                                                                                                                                            style={{
                                                                                                                                                                color:
                                                                                                                                                                    "rgb(0, 0, 0)",
                                                                                                                                                            }}>
                                                                                                                                                            <strong>
                                                                                                                                                                <span data-custom-class="heading_1">
                                                                                                                                                                    <h2>
                                                                                                                                                                        12.
                                                                                                                                                                        HOW
                                                                                                                                                                        CAN
                                                                                                                                                                        YOU
                                                                                                                                                                        CONTACT
                                                                                                                                                                        US
                                                                                                                                                                        ABOUT
                                                                                                                                                                        THIS
                                                                                                                                                                        NOTICE?
                                                                                                                                                                    </h2>
                                                                                                                                                                </span>
                                                                                                                                                            </strong>
                                                                                                                                                        </span>
                                                                                                                                                    </span>
                                                                                                                                                </span>
                                                                                                                                            </span>
                                                                                                                                        </span>
                                                                                                                                        <span
                                                                                                                                            style={{
                                                                                                                                                color:
                                                                                                                                                    "rgb(89, 89, 89)",
                                                                                                                                                fontSize:
                                                                                                                                                    "15px",
                                                                                                                                            }}>
                                                                                                                                            <span
                                                                                                                                                style={{
                                                                                                                                                    color:
                                                                                                                                                        "rgb(89, 89, 89)",
                                                                                                                                                    fontSize:
                                                                                                                                                        "15px",
                                                                                                                                                }}>
                                                                                                                                                <span data-custom-class="body_text">
                                                                                                                                                    If you have
                                                                                                                                                    questions or
                                                                                                                                                    comments about
                                                                                                                                                    this notice,
                                                                                                                                                    you may{" "}
                                                                                                                                                    <span
                                                                                                                                                        style={{
                                                                                                                                                            color:
                                                                                                                                                                "rgb(89, 89, 89)",
                                                                                                                                                            fontSize:
                                                                                                                                                                "15px",
                                                                                                                                                        }}>
                                                                                                                                                        <span data-custom-class="body_text">
                                                                                                                                                            <bdt className="block-component">
                                                                                                                                                                <bdt className="block-component" />
                                                                                                                                                            </bdt>
                                                                                                                                                            email us
                                                                                                                                                            at{" "}
                                                                                                                                                            <bdt className="question">
                                                                                                                                                                CRSoftwareEngineer@outlook.com
                                                                                                                                                                or
                                                                                                                                                            </bdt>
                                                                                                                                                            <bdt className="statement-end-if-in-editor">
                                                                                                                                                                <bdt className="block-component" />
                                                                                                                                                            </bdt>
                                                                                                                                                        </span>
                                                                                                                                                    </span>
                                                                                                                                                    <span
                                                                                                                                                        style={{
                                                                                                                                                            color:
                                                                                                                                                                "rgb(89, 89, 89)",
                                                                                                                                                            fontSize:
                                                                                                                                                                "15px",
                                                                                                                                                        }}>
                                                                                                                                                        <span
                                                                                                                                                            style={{
                                                                                                                                                                color:
                                                                                                                                                                    "rgb(89, 89, 89)",
                                                                                                                                                                fontSize:
                                                                                                                                                                    "15px",
                                                                                                                                                            }}>
                                                                                                                                                            <span data-custom-class="body_text">
                                                                                                                                                                contact
                                                                                                                                                                us by
                                                                                                                                                                post at:
                                                                                                                                                            </span>
                                                                                                                                                        </span>
                                                                                                                                                    </span>
                                                                                                                                                </span>
                                                                                                                                            </span>
                                                                                                                                        </span>
                                                                                                                                    </div>
                                                                                                                                    <div
                                                                                                                                        style={{
                                                                                                                                            lineHeight: "1.5",
                                                                                                                                        }}>
                                                                                                                                        <br />
                                                                                                                                    </div>
                                                                                                                                    <div
                                                                                                                                        style={{
                                                                                                                                            lineHeight: "1.5",
                                                                                                                                        }}>
                                                                                                                                        <span
                                                                                                                                            style={{
                                                                                                                                                color:
                                                                                                                                                    "rgb(89, 89, 89)",
                                                                                                                                                fontSize:
                                                                                                                                                    "15px",
                                                                                                                                            }}>
                                                                                                                                            <span
                                                                                                                                                style={{
                                                                                                                                                    color:
                                                                                                                                                        "rgb(89, 89, 89)",
                                                                                                                                                    fontSize:
                                                                                                                                                        "15px",
                                                                                                                                                }}>
                                                                                                                                                <span data-custom-class="body_text">
                                                                                                                                                    <span
                                                                                                                                                        style={{
                                                                                                                                                            fontSize:
                                                                                                                                                                "15px",
                                                                                                                                                        }}>
                                                                                                                                                        <span
                                                                                                                                                            style={{
                                                                                                                                                                color:
                                                                                                                                                                    "rgb(89, 89, 89)",
                                                                                                                                                            }}>
                                                                                                                                                            <span
                                                                                                                                                                style={{
                                                                                                                                                                    color:
                                                                                                                                                                        "rgb(89, 89, 89)",
                                                                                                                                                                }}>
                                                                                                                                                                <span data-custom-class="body_text">
                                                                                                                                                                    <bdt className="question">
                                                                                                                                                                        Chris
                                                                                                                                                                        Renshaw,
                                                                                                                                                                        Freelance
                                                                                                                                                                        Software
                                                                                                                                                                        Engineer
                                                                                                                                                                    </bdt>
                                                                                                                                                                </span>
                                                                                                                                                            </span>
                                                                                                                                                        </span>
                                                                                                                                                    </span>
                                                                                                                                                </span>
                                                                                                                                                <span data-custom-class="body_text">
                                                                                                                                                    <span
                                                                                                                                                        style={{
                                                                                                                                                            color:
                                                                                                                                                                "rgb(89, 89, 89)",
                                                                                                                                                        }}>
                                                                                                                                                        <span data-custom-class="body_text">
                                                                                                                                                            <bdt className="block-component" />
                                                                                                                                                        </span>
                                                                                                                                                    </span>
                                                                                                                                                </span>
                                                                                                                                            </span>
                                                                                                                                        </span>
                                                                                                                                    </div>
                                                                                                                                    <div
                                                                                                                                        style={{
                                                                                                                                            lineHeight: "1.5",
                                                                                                                                        }}>
                                                                                                                                        <span
                                                                                                                                            style={{
                                                                                                                                                fontSize:
                                                                                                                                                    "15px",
                                                                                                                                            }}>
                                                                                                                                            <span data-custom-class="body_text">
                                                                                                                                                <bdt className="question">
                                                                                                                                                    180 Western
                                                                                                                                                    Road
                                                                                                                                                </bdt>
                                                                                                                                                <span
                                                                                                                                                    style={{
                                                                                                                                                        color:
                                                                                                                                                            "rgb(89, 89, 89)",
                                                                                                                                                    }}>
                                                                                                                                                    <span
                                                                                                                                                        style={{
                                                                                                                                                            fontSize:
                                                                                                                                                                "15px",
                                                                                                                                                        }}>
                                                                                                                                                        <bdt className="block-component" />
                                                                                                                                                    </span>
                                                                                                                                                </span>
                                                                                                                                            </span>
                                                                                                                                        </span>
                                                                                                                                    </div>
                                                                                                                                    <div
                                                                                                                                        style={{
                                                                                                                                            lineHeight: "1.5",
                                                                                                                                        }}>
                                                                                                                                        <span
                                                                                                                                            style={{
                                                                                                                                                fontSize:
                                                                                                                                                    "15px",
                                                                                                                                            }}>
                                                                                                                                            <span data-custom-class="body_text">
                                                                                                                                                <bdt className="question">
                                                                                                                                                    Sheffield
                                                                                                                                                </bdt>
                                                                                                                                                <span
                                                                                                                                                    style={{
                                                                                                                                                        color:
                                                                                                                                                            "rgb(89, 89, 89)",
                                                                                                                                                    }}>
                                                                                                                                                    <span
                                                                                                                                                        style={{
                                                                                                                                                            fontSize:
                                                                                                                                                                "15px",
                                                                                                                                                        }}>
                                                                                                                                                        <bdt className="block-component" />
                                                                                                                                                        <bdt className="block-component" />{" "}
                                                                                                                                                        <bdt className="question">
                                                                                                                                                            S10 1LF
                                                                                                                                                        </bdt>
                                                                                                                                                        <bdt className="statement-end-if-in-editor" />
                                                                                                                                                        <bdt className="block-component" />
                                                                                                                                                        <bdt className="block-component" />
                                                                                                                                                    </span>
                                                                                                                                                </span>
                                                                                                                                                <span data-custom-class="body_text">
                                                                                                                                                    <span
                                                                                                                                                        style={{
                                                                                                                                                            fontSize:
                                                                                                                                                                "15px",
                                                                                                                                                        }}>
                                                                                                                                                        <bdt className="block-component" />
                                                                                                                                                    </span>
                                                                                                                                                </span>
                                                                                                                                            </span>
                                                                                                                                        </span>
                                                                                                                                    </div>
                                                                                                                                    <div
                                                                                                                                        style={{
                                                                                                                                            lineHeight: "1.5",
                                                                                                                                        }}>
                                                                                                                                        <span data-custom-class="body_text">
                                                                                                                                            <span
                                                                                                                                                style={{
                                                                                                                                                    fontSize:
                                                                                                                                                        "15px",
                                                                                                                                                }}>
                                                                                                                                                <bdt className="question">
                                                                                                                                                    United Kingdom
                                                                                                                                                </bdt>
                                                                                                                                                <bdt className="else-block" />
                                                                                                                                            </span>
                                                                                                                                        </span>
                                                                                                                                        <span
                                                                                                                                            data-custom-class="body_text"
                                                                                                                                            style={{
                                                                                                                                                fontSize:
                                                                                                                                                    "15px",
                                                                                                                                            }}>
                                                                                                                                            <bdt className="question">
                                                                                                                                                <span data-custom-class="body_text">
                                                                                                                                                    <span
                                                                                                                                                        style={{
                                                                                                                                                            color:
                                                                                                                                                                "rgb(89, 89, 89)",
                                                                                                                                                        }}>
                                                                                                                                                        <span
                                                                                                                                                            style={{
                                                                                                                                                                fontSize:
                                                                                                                                                                    "15px",
                                                                                                                                                            }}>
                                                                                                                                                            <bdt className="else-block" />
                                                                                                                                                        </span>
                                                                                                                                                    </span>
                                                                                                                                                </span>
                                                                                                                                            </bdt>
                                                                                                                                            <bdt className="statement-end-if-in-editor" />
                                                                                                                                        </span>
                                                                                                                                        <span data-custom-class="body_text">
                                                                                                                                            <span
                                                                                                                                                style={{
                                                                                                                                                    color:
                                                                                                                                                        "rgb(89, 89, 89)",
                                                                                                                                                }}>
                                                                                                                                                <span
                                                                                                                                                    style={{
                                                                                                                                                        fontSize:
                                                                                                                                                            "15px",
                                                                                                                                                    }}>
                                                                                                                                                    <bdt className="statement-end-if-in-editor" />
                                                                                                                                                </span>
                                                                                                                                            </span>
                                                                                                                                        </span>
                                                                                                                                        <span data-custom-class="body_text">
                                                                                                                                            <span
                                                                                                                                                style={{
                                                                                                                                                    fontSize:
                                                                                                                                                        "15px",
                                                                                                                                                }}>
                                                                                                                                                <span data-custom-class="body_text">
                                                                                                                                                    <span
                                                                                                                                                        style={{
                                                                                                                                                            color:
                                                                                                                                                                "rgb(89, 89, 89)",
                                                                                                                                                        }}>
                                                                                                                                                        <bdt className="statement-end-if-in-editor">
                                                                                                                                                            <span
                                                                                                                                                                style={{
                                                                                                                                                                    color:
                                                                                                                                                                        "rgb(89, 89, 89)",
                                                                                                                                                                }}>
                                                                                                                                                                <span
                                                                                                                                                                    style={{
                                                                                                                                                                        fontSize:
                                                                                                                                                                            "15px",
                                                                                                                                                                    }}>
                                                                                                                                                                    <span data-custom-class="body_text">
                                                                                                                                                                        <bdt className="block-component">
                                                                                                                                                                            <bdt className="block-component" />
                                                                                                                                                                        </bdt>
                                                                                                                                                                    </span>
                                                                                                                                                                </span>
                                                                                                                                                            </span>
                                                                                                                                                        </bdt>
                                                                                                                                                    </span>
                                                                                                                                                </span>
                                                                                                                                            </span>
                                                                                                                                        </span>
                                                                                                                                    </div>
                                                                                                                                    <div
                                                                                                                                        style={{
                                                                                                                                            lineHeight: "1.5",
                                                                                                                                        }}>
                                                                                                                                        <br />
                                                                                                                                    </div>
                                                                                                                                    <div
                                                                                                                                        style={{
                                                                                                                                            lineHeight: "1.5",
                                                                                                                                        }}>
                                                                                                                                        <span
                                                                                                                                            data-custom-class="body_text"
                                                                                                                                            style={{
                                                                                                                                                fontSize:
                                                                                                                                                    "15px",
                                                                                                                                            }}>
                                                                                                                                            If you are a
                                                                                                                                            resident in the
                                                                                                                                            United Kingdom, we
                                                                                                                                            are the{" "}
                                                                                                                                            <bdt className="block-component" />
                                                                                                                                            'data controller'
                                                                                                                                            <bdt className="else-block" />{" "}
                                                                                                                                            of your personal
                                                                                                                                            information. We
                                                                                                                                            have appointed{" "}
                                                                                                                                            <span
                                                                                                                                                style={{
                                                                                                                                                    color:
                                                                                                                                                        "rgb(89, 89, 89)",
                                                                                                                                                    fontSize:
                                                                                                                                                        "15px",
                                                                                                                                                }}>
                                                                                                                                                <span data-custom-class="body_text">
                                                                                                                                                    <bdt className="question">
                                                                                                                                                        Chris
                                                                                                                                                        Renshaw
                                                                                                                                                    </bdt>
                                                                                                                                                </span>
                                                                                                                                            </span>{" "}
                                                                                                                                            to be our
                                                                                                                                            representative in
                                                                                                                                            the UK. You can
                                                                                                                                            contact them
                                                                                                                                            directly regarding
                                                                                                                                            our processing of
                                                                                                                                            your information
                                                                                                                                            <span
                                                                                                                                                style={{
                                                                                                                                                    color:
                                                                                                                                                        "rgb(89, 89, 89)",
                                                                                                                                                    fontSize:
                                                                                                                                                        "15px",
                                                                                                                                                }}>
                                                                                                                                                <span data-custom-class="body_text">
                                                                                                                                                    ,
                                                                                                                                                    <bdt className="block-component" />{" "}
                                                                                                                                                    by email at{" "}
                                                                                                                                                    <bdt className="question">
                                                                                                                                                        CRSoftwareEngineer@outlook.com
                                                                                                                                                    </bdt>
                                                                                                                                                    ,
                                                                                                                                                    <bdt className="statement-end-if-in-editor" />
                                                                                                                                                    <bdt className="block-component" />{" "}
                                                                                                                                                    by visiting{" "}
                                                                                                                                                    <span
                                                                                                                                                        style={{
                                                                                                                                                            color:
                                                                                                                                                                "rgb(0, 58, 250)",
                                                                                                                                                        }}>
                                                                                                                                                        <bdt className="question">
                                                                                                                                                            <a
                                                                                                                                                                data-custom-class="link"
                                                                                                                                                                href="https://www.chrisrenshaw.net"
                                                                                                                                                                target="_blank">
                                                                                                                                                                https://www.chrisrenshaw.net
                                                                                                                                                            </a>
                                                                                                                                                        </bdt>
                                                                                                                                                    </span>
                                                                                                                                                    ,
                                                                                                                                                    <bdt className="statement-end-if-in-editor" />
                                                                                                                                                    <bdt className="block-component" />{" "}
                                                                                                                                                    by phone at{" "}
                                                                                                                                                    <bdt className="question">
                                                                                                                                                        07929733185
                                                                                                                                                    </bdt>
                                                                                                                                                    ,
                                                                                                                                                    <bdt className="statement-end-if-in-editor" />
                                                                                                                                                </span>
                                                                                                                                            </span>{" "}
                                                                                                                                            or by post to:
                                                                                                                                        </span>
                                                                                                                                    </div>
                                                                                                                                    <div
                                                                                                                                        style={{
                                                                                                                                            lineHeight: "1.5",
                                                                                                                                        }}>
                                                                                                                                        <br />
                                                                                                                                    </div>
                                                                                                                                    <div
                                                                                                                                        style={{
                                                                                                                                            lineHeight: "1.5",
                                                                                                                                        }}>
                                                                                                                                        <span
                                                                                                                                            style={{
                                                                                                                                                fontSize:
                                                                                                                                                    "15px",
                                                                                                                                            }}>
                                                                                                                                            <span data-custom-class="body_text">
                                                                                                                                                <bdt className="question">
                                                                                                                                                    180 Western
                                                                                                                                                    Road
                                                                                                                                                    <span
                                                                                                                                                        style={{
                                                                                                                                                            color:
                                                                                                                                                                "rgb(89, 89, 89)",
                                                                                                                                                            fontSize:
                                                                                                                                                                "15px",
                                                                                                                                                        }}>
                                                                                                                                                        <span data-custom-class="body_text">
                                                                                                                                                            <bdt className="block-component" />
                                                                                                                                                        </span>
                                                                                                                                                    </span>
                                                                                                                                                </bdt>
                                                                                                                                            </span>
                                                                                                                                        </span>
                                                                                                                                    </div>
                                                                                                                                    <div
                                                                                                                                        style={{
                                                                                                                                            lineHeight: "1.5",
                                                                                                                                        }}>
                                                                                                                                        <span
                                                                                                                                            style={{
                                                                                                                                                fontSize:
                                                                                                                                                    "15px",
                                                                                                                                            }}>
                                                                                                                                            <span data-custom-class="body_text">
                                                                                                                                                <span
                                                                                                                                                    style={{
                                                                                                                                                        fontSize:
                                                                                                                                                            "15px",
                                                                                                                                                    }}>
                                                                                                                                                    <span data-custom-class="body_text">
                                                                                                                                                        <bdt className="question">
                                                                                                                                                            Sheffield
                                                                                                                                                        </bdt>
                                                                                                                                                    </span>
                                                                                                                                                </span>
                                                                                                                                                <span
                                                                                                                                                    style={{
                                                                                                                                                        color:
                                                                                                                                                            "rgb(89, 89, 89)",
                                                                                                                                                        fontSize:
                                                                                                                                                            "15px",
                                                                                                                                                    }}>
                                                                                                                                                    <span data-custom-class="body_text">
                                                                                                                                                        <bdt className="block-component" />
                                                                                                                                                    </span>
                                                                                                                                                </span>
                                                                                                                                                <span
                                                                                                                                                    style={{
                                                                                                                                                        fontSize:
                                                                                                                                                            "15px",
                                                                                                                                                    }}>
                                                                                                                                                    <span data-custom-class="body_text">
                                                                                                                                                        <bdt className="question"> S10 1LF
                                                                                                                                                        </bdt>
                                                                                                                                                    </span>
                                                                                                                                                </span>
                                                                                                                                            </span>
                                                                                                                                        </span>
                                                                                                                                    </div>
                                                                                                                                    <div
                                                                                                                                        style={{
                                                                                                                                            lineHeight: "1.5",
                                                                                                                                        }}>
                                                                                                                                        <span
                                                                                                                                            data-custom-class="body_text"
                                                                                                                                            style={{
                                                                                                                                                fontSize:
                                                                                                                                                    "15px",
                                                                                                                                            }}>
                                                                                                                                            <bdt className="block-component" />
                                                                                                                                            <bdt className="question">
                                                                                                                                                England
                                                                                                                                            </bdt>
                                                                                                                                            <bdt className="else-block" />
                                                                                                                                            <span
                                                                                                                                                style={{
                                                                                                                                                    fontSize:
                                                                                                                                                        "15px",
                                                                                                                                                }}>
                                                                                                                                                <span data-custom-class="body_text">
                                                                                                                                                    <span
                                                                                                                                                        style={{
                                                                                                                                                            color:
                                                                                                                                                                "rgb(89, 89, 89)",
                                                                                                                                                            fontSize:
                                                                                                                                                                "15px",
                                                                                                                                                        }}>
                                                                                                                                                        <span
                                                                                                                                                            style={{
                                                                                                                                                                fontSize:
                                                                                                                                                                    "15px",
                                                                                                                                                            }}>
                                                                                                                                                            <span data-custom-class="body_text">
                                                                                                                                                                <bdt className="statement-end-if-in-editor" />
                                                                                                                                                            </span>
                                                                                                                                                        </span>
                                                                                                                                                    </span>
                                                                                                                                                </span>
                                                                                                                                            </span>
                                                                                                                                        </span>
                                                                                                                                        <bdt className="block-component">
                                                                                                                                            <span
                                                                                                                                                style={{
                                                                                                                                                    fontSize:
                                                                                                                                                        "15px",
                                                                                                                                                }}
                                                                                                                                            />
                                                                                                                                        </bdt>
                                                                                                                                        <span
                                                                                                                                            style={{
                                                                                                                                                fontSize:
                                                                                                                                                    "15px",
                                                                                                                                            }}>
                                                                                                                                            <span data-custom-class="body_text">
                                                                                                                                                <span
                                                                                                                                                    style={{
                                                                                                                                                        color:
                                                                                                                                                            "rgb(89, 89, 89)",
                                                                                                                                                        fontSize:
                                                                                                                                                            "15px",
                                                                                                                                                    }}>
                                                                                                                                                    <span
                                                                                                                                                        style={{
                                                                                                                                                            fontSize:
                                                                                                                                                                "15px",
                                                                                                                                                        }}>
                                                                                                                                                        <span data-custom-class="body_text">
                                                                                                                                                            <bdt className="statement-end-if-in-editor">
                                                                                                                                                                <bdt className="block-component" />
                                                                                                                                                            </bdt>
                                                                                                                                                        </span>
                                                                                                                                                    </span>
                                                                                                                                                </span>
                                                                                                                                            </span>
                                                                                                                                        </span>
                                                                                                                                    </div>
                                                                                                                                    <div
                                                                                                                                        style={{
                                                                                                                                            lineHeight: "1.5",
                                                                                                                                        }}>
                                                                                                                                        <br />
                                                                                                                                    </div>
                                                                                                                                    <div
                                                                                                                                        id="request"
                                                                                                                                        style={{
                                                                                                                                            lineHeight: "1.5",
                                                                                                                                        }}>
                                                                                                                                        <span
                                                                                                                                            style={{
                                                                                                                                                color:
                                                                                                                                                    "rgb(127, 127, 127)",
                                                                                                                                            }}>
                                                                                                                                            <span
                                                                                                                                                style={{
                                                                                                                                                    color:
                                                                                                                                                        "rgb(89, 89, 89)",
                                                                                                                                                    fontSize:
                                                                                                                                                        "15px",
                                                                                                                                                }}>
                                                                                                                                                <span
                                                                                                                                                    style={{
                                                                                                                                                        color:
                                                                                                                                                            "rgb(89, 89, 89)",
                                                                                                                                                        fontSize:
                                                                                                                                                            "15px",
                                                                                                                                                    }}>
                                                                                                                                                    <span
                                                                                                                                                        style={{
                                                                                                                                                            color:
                                                                                                                                                                "rgb(89, 89, 89)",
                                                                                                                                                            fontSize:
                                                                                                                                                                "15px",
                                                                                                                                                        }}>
                                                                                                                                                        <span
                                                                                                                                                            id="control"
                                                                                                                                                            style={{
                                                                                                                                                                color:
                                                                                                                                                                    "rgb(0, 0, 0)",
                                                                                                                                                            }}>
                                                                                                                                                            <strong>
                                                                                                                                                                <span data-custom-class="heading_1">
                                                                                                                                                                    <h2>
                                                                                                                                                                        13.
                                                                                                                                                                        HOW
                                                                                                                                                                        CAN
                                                                                                                                                                        YOU
                                                                                                                                                                        REVIEW,
                                                                                                                                                                        UPDATE,
                                                                                                                                                                        OR
                                                                                                                                                                        DELETE
                                                                                                                                                                        THE
                                                                                                                                                                        DATA
                                                                                                                                                                        WE
                                                                                                                                                                        COLLECT
                                                                                                                                                                        FROM
                                                                                                                                                                        YOU?
                                                                                                                                                                    </h2>
                                                                                                                                                                </span>
                                                                                                                                                            </strong>
                                                                                                                                                        </span>
                                                                                                                                                    </span>
                                                                                                                                                </span>
                                                                                                                                            </span>
                                                                                                                                        </span>
                                                                                                                                        <span
                                                                                                                                            style={{
                                                                                                                                                color:
                                                                                                                                                    "rgb(89, 89, 89)",
                                                                                                                                                fontSize:
                                                                                                                                                    "15px",
                                                                                                                                            }}>
                                                                                                                                            <span
                                                                                                                                                style={{
                                                                                                                                                    color:
                                                                                                                                                        "rgb(89, 89, 89)",
                                                                                                                                                    fontSize:
                                                                                                                                                        "15px",
                                                                                                                                                }}>
                                                                                                                                                <span data-custom-class="body_text">
                                                                                                                                                    <bdt className="block-component" />
                                                                                                                                                    Based on the
                                                                                                                                                    applicable
                                                                                                                                                    laws of your
                                                                                                                                                    country
                                                                                                                                                    <bdt className="block-component" />
                                                                                                                                                    , you may
                                                                                                                                                    <bdt className="else-block">
                                                                                                                                                        <bdt className="block-component">
                                                                                                                                                            {" "}
                                                                                                                                                            have the
                                                                                                                                                            right to
                                                                                                                                                            request
                                                                                                                                                            access to
                                                                                                                                                            the
                                                                                                                                                            personal
                                                                                                                                                            information
                                                                                                                                                            we collect
                                                                                                                                                            from you,
                                                                                                                                                            details
                                                                                                                                                            about how
                                                                                                                                                            we have
                                                                                                                                                            processed
                                                                                                                                                            it,
                                                                                                                                                            correct
                                                                                                                                                            inaccuracies,
                                                                                                                                                            or delete
                                                                                                                                                            your
                                                                                                                                                            personal
                                                                                                                                                            information.
                                                                                                                                                            You may
                                                                                                                                                            also have
                                                                                                                                                            the right
                                                                                                                                                            to{" "}
                                                                                                                                                            <bdt className="block-component" />
                                                                                                                                                            withdraw
                                                                                                                                                            your
                                                                                                                                                            consent to
                                                                                                                                                            our
                                                                                                                                                            processing
                                                                                                                                                            of your
                                                                                                                                                            personal
                                                                                                                                                            information.
                                                                                                                                                            These
                                                                                                                                                            rights may
                                                                                                                                                            be limited
                                                                                                                                                            in some
                                                                                                                                                            circumstances
                                                                                                                                                            by
                                                                                                                                                            applicable
                                                                                                                                                            law. To
                                                                                                                                                            request to
                                                                                                                                                            review,
                                                                                                                                                            update, or
                                                                                                                                                            delete
                                                                                                                                                            your
                                                                                                                                                            personal
                                                                                                                                                            information,
                                                                                                                                                            please{" "}
                                                                                                                                                            <bdt className="block-component" />
                                                                                                                                                            fill out
                                                                                                                                                            and submit
                                                                                                                                                            a
                                                                                                                                                        </bdt>
                                                                                                                                                    </bdt>
                                                                                                                                                </span>
                                                                                                                                                <span
                                                                                                                                                    style={{
                                                                                                                                                        color:
                                                                                                                                                            "rgb(0, 58, 250)",
                                                                                                                                                    }}>
                                                                                                                                                    <span data-custom-class="body_text">
                                                                                                                                                        <span
                                                                                                                                                            style={{
                                                                                                                                                                color:
                                                                                                                                                                    "rgb(0, 58, 250)",
                                                                                                                                                                fontSize:
                                                                                                                                                                    "15px",
                                                                                                                                                            }}>
                                                                                                                                                            <a
                                                                                                                                                                data-custom-class="link"
                                                                                                                                                                href="https://app.termly.io/notify/cfd49fdc-8eab-4b37-81b5-358d5e7171c9"
                                                                                                                                                                rel="noopener noreferrer"
                                                                                                                                                                target="_blank"> data subject access request
                                                                                                                                                            </a>
                                                                                                                                                        </span>
                                                                                                                                                    </span>
                                                                                                                                                </span>
                                                                                                                                                <bdt className="block-component">
                                                                                                                                                    <span data-custom-class="body_text" />
                                                                                                                                                </bdt>
                                                                                                                                            </span>
                                                                                                                                        </span>
                                                                                                                                        <span data-custom-class="body_text">
                                                                                                                                            .
                                                                                                                                        </span>
                                                                                                                                    </div>
                                                                                                                                    <style
                                                                                                                                        dangerouslySetInnerHTML={{
                                                                                                                                            __html:
                                                                                                                                                "      ul {        list-style-type: square;      }      ul > li > ul {        list-style-type: circle;      }      ul > li > ul > li > ul {        list-style-type: square;      }      ol li {        font-family: Arial ;      }    ",
                                                                                                                                        }}
                                                                                                                                    />
                                                                                                                                </div>
                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>;

            </div>
        </div>
    );
};

export default PrivacyPolicyModal;