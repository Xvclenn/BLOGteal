import "./LogIN.css";

export function LogIN() {
    return (
        <>
            <div>Login</div>
            <div className="login">
                <div className="leftSide">
                    <div className="Logincontainer">
                        <img
                            src="./blogIcon.png"
                            alt="icon"
                            height="150px"
                            width="150px"
                        />

                        <input placeholder="Email" />

                        <input placeholder="Password" />

                        <div className="form-check form-switch">
                            <label className="form-check-label">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    role="switch"
                                    id="flexSwitchCheckDefault"
                                />
                                Remind Me
                            </label>
                        </div>
                        <button className="btn btn-primary">Login</button>
                    </div>
                </div>
                <div className="rightSide">img</div>
            </div>
        </>
    );
}
