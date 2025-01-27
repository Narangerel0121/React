import { Covered_By_Your_Grace } from "next/font/google";

export default function Home() {
    return (
        <div>
            <div id="front" style={{

            }}>
                <div id="card" style={{
                    width: "336px",
                    height: "192px",
                    borderRadius: "10px",
                    backgroundColor: "red",
                    border: "none",
                    boxSizing: "border-box",
                    display: "flex",
                    flexDirection: "row-reverse",
                }}>
                    <div id="blackSide" style={{
                        width: "151px",
                        height: "192px",
                        // right: "0px",
                        backgroundColor: "#141717",
                        borderRadius: "10px",

                    }}>
                        <div id="logoSection" style={{
                            display: "flex",
                            flexDirection: "column",
                            judtifyContent: "space-around",
                            alignItems: "center",
                            height: "192px",
                        }}>
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                marginBottom: "25px"
                            }}>
                                <img src="/companyLogo.svg" style={{
                                    marginTop: "25px",
                                    width: "30px",
                                    height: "30px",
                                    // display: "flex",
                                    // flexDirection: "column",
                                    // JustifyContent: "center",
                                    // alignItems: "center",
                                }} />
                                <div id="companyInformation">
                                    <p style={{
                                        textAlign: "center",
                                        color: "#ffffff",
                                        fontSize: "16px",
                                        fontWeight: "500",
                                    }}><b>Company Name</b></p>
                                    <p style={{
                                        textAlign: "center",
                                        fontSize: "16px",
                                        color: "#ffffff",
                                    }}>Tag Line Goes Here</p>
                                </div>
                            </div>
                            <img src="./public/QR.svg" style={{
                                width: "42px",
                                height: "42px",
                                bottom: "25px",
                            }} />
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>John Doe</p>
                            <p>Designer</p>
                        </div>
                        <div>
                            <div>
                                <img src="public/callLogo.svg" style={{
                                    width: "8px",
                                    height: "8px",
                                }} />
                                <p>000-123-456-7890</p>
                            </div>
                            <div>
                                <img src="public/mail-logo.svg" style={{
                                    width: "7.5px",
                                    height: "6px",
                                }} />
                                <p>email@yourdomain.com</p>
                            </div>
                            <div>
                                <img src="public/mapLogo.svg" style={{
                                    width: "6px",
                                    height: "8px",
                                }} />
                                <p>Your address goes here 125 Street, USA</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}