import Image from "next/image";
import styles from "./global.css";

function Card(props) {
    return (
        <div className="container">
            <div className="whiteSide">
                <div className="ownerInfo">
                    <div className="ownerName">
                        <span className="firstName">{props.user.firstName}</span>
                        <span className="lastName">{props.user.lastName}</span>
                    </div>
                    <p className="occupation">{props.user.occupation}</p>
                </div>
                <div className="companyInfo">
                    <div className="oneLine">
                        <img src="phoneLogo.svg" className="phoneNumber" />
                        <p className="infoTexts">{props.user.phoneNumber}</p>
                    </div>
                    <div className="oneLine">
                        <img src="mail-logo.svg" className="email" />
                        <p className="infoTexts">{props.user.email}</p>
                    </div>
                    <div className="oneLine">
                        <img src="mapLogo.svg" className="address" />
                        <p className="infoTexts">{props.user.address}</p>
                    </div>
                </div>
            </div>
            <div className="blackSide">
                <img src="shape.svg" className="vectors" />
                <div className="logoSection">
                    <img src="companyLogo.svg" align="right" className="logo" />
                    <p className="companyName">{props.user.companyName}</p>
                    <p className="tag">{props.user.tag}</p>
                </div>
                <img src="qrLOgo.svg" className="qrCode" />
            </div>
        </div>
    )
}

const users = [
    {
        firstName: "Narangerel",
        lastName: "Bumnasan",
        occupation: "Teacher",
        phoneNumber: "+976 86788859",
        email: "nrngrl0121@gmail.com",
        address: "Sukhbaatar district",
        companyName: "Naraa's Compnay",
        tag: "#Be funny."
    },
    {
        firstName: "Baljan",
        lastName: "Munkhbayasakh",
        occupation: "Singer",
        phoneNumber: "+976 99733053",
        email: "balju0506@gmail.com",
        address: "Bayanzurkh district",
        companyName: "Baljukeaaa's Company",
        tag: "#Be strong."
    },
    {
        firstName: "Ursaa",
        lastName: "Sergelenbaatar",
        occupation: "Adviser",
        phoneNumber: "+976 89898769",
        email: "ursaa0105@gmail.com",
        address: "Chingeltei district",
        companyName: "Ursaa's Company",
        tag: "#Be wise."
    },
    {
        firstName: "Ider",
        lastName: "Batsaikhan",
        occupation: "Gamer",
        phoneNumber: "+976 98767679",
        email: "ideree1125@gmail.com",
        address: "Bayangol district",
        companyName: "Ideree's Company",
        tag: "#Be ready."
    },
    {
        firstName: "Chingun",
        lastName: "Ulam-Urnukh",
        occupation: "Comedian",
        phoneNumber: "+976 99775566",
        email: "chingun1111@gmail.com",
        address: "Songino Khairkhan district",
        companyName: "Chingun's Company",
        tag: "#Be happy."
    },
    {
        firstName: "Jargalsaikhan",
        lastName: "Batbaatar",
        occupation: "Sportsman",
        phoneNumber: "+976 88775577",
        email: "jagai0323@gmail.com",
        address: "Khan Uul district",
        companyName: "Jagai's Company",
        tag: "#Be creative."
    },
    {
        firstName: "Itgel",
        lastName: "Bayartsogt",
        occupation: "Musician",
        phoneNumber: "+976 88998899",
        email: "itgel2005@gmail.com",
        address: "Nalaikh district",
        companyName: "#Itgel's Company",
        tag: "#Be lucky."
    },
    {
        firstName: "Telmuun",
        lastName: "Soninkhuu",
        occupation: "Gamer",
        phoneNumber: "+976 99996677",
        email: "telmuunee1125@gmail.com",
        address: "Sukhbaatar district",
        companyName: "Telmuun's Company",
        tag: "#Be eager."
    },
    {
        firstName: "Aygul",
        lastName: "Boldbaatar",
        occupation: "Adviser",
        phoneNumber: "+976 99080808",
        email: "aygul0024@gmail.com",
        address: "Nalaikh district",
        companyName: "Aygul's Company",
        tag: "#Be determined."
    },
    {
        firstName: "Turbat",
        lastName: "Erhembayar",
        occupation: "Salesman",
        phoneNumber: "+976 80342597",
        email: "turuu0989@gmail.com",
        address: "Baganuur district",
        companyName: "Turuu's Company",
        tag: "#Be chatty."
    },
    {
        firstName: "Ariunjargal",
        lastName: "Sukh",
        occupation: "Scientist",
        phoneNumber: "+976 86470537",
        email: "ariuka0321@gmail.com",
        address: "Khan Uul district",
        companyName: "Ari's Company",
        tag: "#Be certain"
    },
    {
        firstName: "Nomin-Erdene",
        lastName: "Sergelen",
        occupation: "Accountant",
        phoneNumber: "+976 97865767",
        email: "noommmiiii@gmail.com",
        address: "Chingeltei district",
        companyName: "Nomi's Company",
        tag: "#Be positive"
    },
    {
        firstName: "Chinguun",
        lastName: "Munksaikhan",
        occupation: "Developer",
        phoneNumber: "+976 97897878",
        email: "ching2n@gmail.com",
        address: "Bayanzurkh district",
        companyName: "Ching2n's Company",
        tag: "#Be fortune."
    },
    {
        firstName: "Jamyasuren",
        lastName: "Odsuren",
        occupation: "Soldier",
        phoneNumber: "+976 88657439",
        email: "jamya2004@gmail.com",
        address: "Nalaikh district",
        companyName: "Jamya's Company",
        tag: "#Be certain."
    },
    {
        firstName: "Baasandash",
        lastName: "Gombo",
        occupation: "Policeman",
        phoneNumber: "+976 94663646",
        email: "baska1999@gmail.com",
        address: "Baganuut district",
        companyName: "Baska's Company",
        tag: "#Be content."
    },
    {
        firstName: "Huvituguldur",
        lastName: "Tulga",
        occupation: "Doctor",
        phoneNumber: "+976 80706067",
        email: "tuguldur@gmail.com",
        address: "Songino Khairkhan district",
        companyName: "Tuguldur's company",
        tag: "#Be eglad."
    },
    {
        firstName: "Tugsbileg",
        lastName: "Narmandakh",
        occupation: "Consuler",
        phoneNumber: "+976 87788899",
        email: "tugsuu5555@gmail.com",
        address: "Chingeltei district",
        companyName: "Tugsuu's Company",
        tag: "#Be shocked."
    },
    {
        firstName: "Oyunbat",
        lastName: "Saikhan",
        occupation: "Engineer",
        phoneNumber: "+976 95678849",
        email: "oyunbat2004@gmail.com",
        address: "Bayngol district",
        companyName: "Oyunbat's Company",
        tag: "#Be fortunate."
    }
]

export default function Home() {
    const cards = [];
    for (let i = 0; i < users.length; i++) {
        cards.push(<Card user={users[i]}></Card>)
    }
    return (
        <div id="body">
            {cards}
        </div>
    );
}