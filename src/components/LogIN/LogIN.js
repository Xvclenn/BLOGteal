import "./LogIN.css";

export function LogIN() {
    return (
        <>
            <div>Login</div>
            <div className="login">
                <div className="leftSide">
                    <img
                        src="./blogIcon.png"
                        alt="icon"
                        height="150px"
                        width="150px"
                    />

                    <input placeholder="Email" />

                    <input placeholder="Password" />
                    <button>Login</button>
                </div>
                <div className="rightSide">img</div>
            </div>
        </>
    );
}
