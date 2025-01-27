import { Covered_By_Your_Grace } from "next/font/google";

export default function Home() {
    return (
        <div>
            <div id="front">
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
                        right: "0px",
                        backgroundColor: "#141717",
                        borderRadius: "10px",

                    }}>
                        <div id="logoSection">
                            <img src="/companyLogo.svg" style={{
                                width: "30px",
                                height: "30px",
                                position: "absolute",
                            }} />
                            <div>
                                <p style={{
                                    width: "91px",
                                    height: "9px",
                                    color: "#ffffff",
                                }}>Company Name</p>
                                <p style={{
                                    width: "55px",
                                    height: "6x",
                                    color: "#ffffff",
                                }}>Tag Line Goes Here</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}