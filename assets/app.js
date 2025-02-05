function getRandomElement(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

var images = ['assets/images/youtube.jpeg', 'assets/images/youtube2.jpeg', 'assets/images/youtube3.jpeg'];
var oerImages = [
    'assets/images/oer1.jpeg',
    'assets/images/oer2.jpeg',
    'assets/images/oer3.jpeg',
    'assets/images/oer4.jpeg',
    'assets/images/oer.jpeg',
];
//Video Data
const data = [
    {
        "sn": 1,
        "level": 100,
        "course_code": "CSC111",
        "modules": 1,
        "unit": 3,
        "title": "Characteristics, Advantages and Disadvantages of Computer",
        "url": "https://youtu.be/b3BH0TLz7wI",
        "vid_id": "b3BH0TLz7wI"
    },
    {
        "sn": 2,
        "level": 100,
        "course_code": "CSC111",
        "modules": 2,
        "unit": 1,
        "title": "Number base Artihmetics and Types",
        "url": "https://youtu.be/d9XTmO_1FtA",
        "vid_id": "d9XTmO_1FtA"
    },
    {
        "sn": 3,
        "level": 100,
        "course_code": "CSC112",
        "modules": "Intro",
        "unit": "",
        "title": "Intro",
        "url": "https://youtu.be/_1TSFLKjYf8",
        "vid_id": "_1TSFLKjYf8"
    },
    {
        "sn": 4,
        "level": 100,
        "course_code": "CSC112",
        "modules": 1,
        "unit": 1,
        "title": "Operating System",
        "url": "https://youtu.be/OkrxpInz3kw",
        "vid_id": "OkrxpInz3kw"
    },
    {
        "sn": 5,
        "level": 100,
        "course_code": "CSC112",
        "modules": 1,
        "unit": 2,
        "title": "Types Of Operating System",
        "url": "https://youtu.be/jdmLijeN4kI",
        "vid_id": "jdmLijeN4kI"
    },
    {
        "sn": 6,
        "level": 200,
        "course_code": "CSC216",
        "modules": "Intro",
        "unit": "",
        "title": "Assembly Language (Introduction)",
        "url": "https://youtu.be/Nf38pyawFeQ",
        "vid_id": "Nf38pyawFeQ"
    },
    {
        "sn": 7,
        "level": 200,
        "course_code": "CSC216",
        "modules": 1,
        "unit": 1,
        "title": "Definition and Brief History of Programming Language",
        "url": "https://youtu.be/kyQfM-4IZ1Y",
        "vid_id": "kyQfM-4IZ1Y"
    },
    {
        "sn": 8,
        "level": 200,
        "course_code": "CSC216",
        "modules": 1,
        "unit": 2,
        "title": "Block Diagram of Digital Computer and Functions of each unit",
        "url": "https://youtu.be/asMoH2HX-HQ",
        "vid_id": "asMoH2HX-HQ"
    },
    {
        "sn": 9,
        "level": 200,
        "course_code": "CSC216",
        "modules": 1,
        "unit": 3,
        "title": "Numbering System",
        "url": "https://youtu.be/LQnPWr1Ipec",
        "vid_id": "LQnPWr1Ipec"
    },
    {
        "sn": 10,
        "level": 200,
        "course_code": "CSC216",
        "modules": 2,
        "unit": 1,
        "title": "Registers",
        "url": "https://youtu.be/isCaE5QcJ2U",
        "vid_id": "isCaE5QcJ2U"
    },
    {
        "sn": 11,
        "level": 200,
        "course_code": "CSC216",
        "modules": 2,
        "unit": 2,
        "title": "Categories of Registers",
        "url": "https://youtu.be/5mkN3mdfJe0",
        "vid_id": "5mkN3mdfJe0"
    },
    {
        "sn": 12,
        "level": 200,
        "course_code": "CSC222",
        "modules": "Intro",
        "unit": "",
        "title": "Intro",
        "url": "https://youtu.be/elt74pKc0Fg",
        "vid_id": "elt74pKc0Fg"
    },
    {
        "sn": 13,
        "level": 200,
        "course_code": "CSC222",
        "modules": 1,
        "unit": 1,
        "title": "File Processing System",
        "url": "https://youtu.be/eHctnP7Q1Xo",
        "vid_id": "eHctnP7Q1Xo"
    },
    {
        "sn": 14,
        "level": 200,
        "course_code": "CSC222",
        "modules": 1,
        "unit": 2,
        "title": "Field, Record and File",
        "url": "https://youtu.be/d4oxoMGz_wY",
        "vid_id": "d4oxoMGz_wY"
    },
    {
        "sn": 15,
        "level": 200,
        "course_code": "CSC222",
        "modules": 2,
        "unit": 1,
        "title": "Database and Database Management Systems",
        "url": "https://youtu.be/h-T_XOlUbYE",
        "vid_id": "h-T_XOlUbYE"
    },
    {
        "sn": 16,
        "level": 200,
        "course_code": "CSC222",
        "modules": 2,
        "unit": 2,
        "title": "Database Management Systems (DBMS)",
        "url": "https://youtu.be/lLBWfFChKUw",
        "vid_id": "lLBWfFChKUw"
    },
    {
        "sn": 17,
        "level": 200,
        "course_code": "CSC222",
        "modules": 2,
        "unit": 3,
        "title": "Database Users and Administrators",
        "url": "https://youtu.be/dqPrk7MpcmU",
        "vid_id": "dqPrk7MpcmU"
    },
    {
        "sn": 18,
        "level": 100,
        "course_code": "PHY115",
        "modules": "Intro",
        "unit": "",
        "title": "Mechanics and Properties Matter I",
        "url": "https://youtu.be/52wL3DHeRXQ",
        "vid_id": "52wL3DHeRXQ"
    },
    {
        "sn": 19,
        "level": 100,
        "course_code": "PHY115",
        "modules": 1,
        "unit": 1,
        "title": "Dimension Analysis(Section 1)",
        "url": "https://youtu.be/mj1paccJluw",
        "vid_id": "mj1paccJluw"
    },
    {
        "sn": 20,
        "level": 100,
        "course_code": "PHY115",
        "modules": 1,
        "unit": 1,
        "title": "Derived Quantities and Units(Section 2)",
        "url": "https://youtu.be/MbEvLrhyvTk",
        "vid_id": "MbEvLrhyvTk"
    },
    {
        "sn": 21,
        "level": 100,
        "course_code": "PHY115",
        "modules": 1,
        "unit": 1,
        "title": "Dimension and Dimension Analysis(Section 3)",
        "url": "https://youtu.be/f2dL9DRjEGA",
        "vid_id": "f2dL9DRjEGA"
    },
    {
        "sn": 22,
        "level": 100,
        "course_code": "PHY115",
        "modules": 1,
        "unit": 2,
        "title": "Vector and Scalar I (Section 1)",
        "url": "https://youtu.be/uO8oqj-jsZ8",
        "vid_id": "uO8oqj-jsZ8"
    },
    {
        "sn": 23,
        "level": 100,
        "course_code": "PHY115",
        "modules": 1,
        "unit": 2,
        "title": "Additon and Subtraction of Vector(Section 2)",
        "url": "https://youtu.be/SQdNcxMqbNY",
        "vid_id": "SQdNcxMqbNY"
    },
    {
        "sn": 24,
        "level": 100,
        "course_code": "PHY115",
        "modules": 1,
        "unit": 2,
        "title": "Adding Vector by Components (Section 3)",
        "url": "https://youtu.be/Lfz6DDxzmc0",
        "vid_id": "Lfz6DDxzmc0"
    },
    {
        "sn": 25,
        "level": 100,
        "course_code": "PHY115",
        "modules": 1,
        "unit": 3,
        "title": "Products of Vectors(Section 1)",
        "url": "https://youtu.be/4cv070IR_P4",
        "vid_id": "4cv070IR_P4"
    },
    {
        "sn": 26,
        "level": 100,
        "course_code": "PHY115",
        "modules": 1,
        "unit": 3,
        "title": "Scalar Product of Vectors (Section 2)",
        "url": "https://youtu.be/TrTNvRWM8eI",
        "vid_id": "TrTNvRWM8eI"
    },
    {
        "sn": 27,
        "level": 100,
        "course_code": "PHY115",
        "modules": 1,
        "unit": 3,
        "title": "Vector Products of Vectors (Section 3)",
        "url": "https://youtu.be/ngQVFz79wn0",
        "vid_id": "ngQVFz79wn0"
    },
    {
        "sn": 28,
        "level": 100,
        "course_code": "PHY115",
        "modules": 2,
        "unit": 1,
        "title": "Kinematics Motions",
        "url": "https://youtu.be/yO6HFFNT_g8",
        "vid_id": "yO6HFFNT_g8"
    },
    {
        "sn": 29,
        "level": 100,
        "course_code": "PHY115",
        "modules": 2,
        "unit": 3,
        "title": "Equation of Motion to Solve Simple Problems",
        "url": "https://youtu.be/GqrE-KB-J6w",
        "vid_id": "GqrE-KB-J6w"
    },
    {
        "sn": 30,
        "level": 100,
        "course_code": "PHY115",
        "modules": 2,
        "unit": 4,
        "title": "Application of the Equations of Motions Along a Vertical Axis",
        "url": "https://youtu.be/1Mw-m-JDtmU",
        "vid_id": "1Mw-m-JDtmU"
    },
    {
        "sn": 31,
        "level": 100,
        "course_code": "PHY115",
        "modules": 2,
        "unit": 5,
        "title": "Motion in Two and Three Dimensions",
        "url": "https://youtu.be/-I6LW_x8M1Y",
        "vid_id": "-I6LW_x8M1Y"
    },
    {
        "sn": 32,
        "level": 100,
        "course_code": "PHY115",
        "modules": 2,
        "unit": 6,
        "title": "Projectile Motion",
        "url": "https://youtu.be/p3aLvdw_ddI",
        "vid_id": "p3aLvdw_ddI"
    },
    {
        "sn": 33,
        "level": 100,
        "course_code": "PHY191",
        "modules": 1,
        "unit": 1,
        "title": "Measurements and Graphical methods",
        "url": "https://youtu.be/o6nGqo7rgMc",
        "vid_id": "o6nGqo7rgMc"
    },
    {
        "sn": 34,
        "level": 100,
        "course_code": "PHY191",
        "modules": 1,
        "unit": 2,
        "title": "Measurements of Length",
        "url": "https://youtu.be/3GR0ImRupYk",
        "vid_id": "3GR0ImRupYk"
    },
    {
        "sn": 35,
        "level": 100,
        "course_code": "PHY191",
        "modules": 2,
        "unit": 1,
        "title": "Viscosity and Surface Tension",
        "url": "https://youtu.be/awMaPMVJILk",
        "vid_id": "awMaPMVJILk"
    },
    {
        "sn": 36,
        "level": 100,
        "course_code": "PHY191",
        "modules": 2,
        "unit": 2,
        "title": "The Simple Pendulum",
        "url": "https://youtu.be/GYWvqpDNSgw",
        "vid_id": "GYWvqpDNSgw"
    },
    {
        "sn": 37,
        "level": 100,
        "course_code": "PHY191",
        "modules": 2,
        "unit": 3,
        "title": "Hooke's Law (Statistic and Dynamics)",
        "url": "https://youtu.be/cKT1ogtHeqU",
        "vid_id": "cKT1ogtHeqU"
    },
    {
        "sn": 38,
        "level": 100,
        "course_code": "PHY191",
        "modules": 2,
        "unit": 4,
        "title": "Moment of Inertia",
        "url": "https://youtu.be/nH8jYd33sCs",
        "vid_id": "nH8jYd33sCs"
    },
    {
        "sn": 39,
        "level": 100,
        "course_code": "PHY191",
        "modules": 2,
        "unit": 5,
        "title": "Vibration of a Fixed Spring (The Single Wire Sonometer)",
        "url": "https://youtu.be/U1mV63hUYww",
        "vid_id": "U1mV63hUYww"
    },
    {
        "sn": 40,
        "level": 100,
        "course_code": "PHY191",
        "modules": 3,
        "unit": 1,
        "title": "MeaSpecific Heat Capacity of a Good Conductor (Metal Block)",
        "url": "https://youtu.be/g-EG0u5hPeQ",
        "vid_id": "g-EG0u5hPeQ"
    },
    {
        "sn": 41,
        "level": 100,
        "course_code": "PHY191",
        "modules": 3,
        "unit": 2,
        "title": "Specific Heat Capacity of a Liquid (Cooling Method)",
        "url": "https://youtu.be/phvoO0Nu8bg",
        "vid_id": "phvoO0Nu8bg"
    },
    {
        "sn": 42,
        "level": 200,
        "course_code": "CSC224",
        "modules": "Intro",
        "unit": "",
        "title": "INTERNET TECHNOLOGY I",
        "url": "https://youtu.be/F1Gt2X3p_Ss",
        "vid_id": "F1Gt2X3p_Ss"
    },
    {
        "sn": 43,
        "level": 200,
        "course_code": "CSC224",
        "modules": 1,
        "unit": 1,
        "title": "History of the Internet",
        "url": "https://youtu.be/nRQBt1jDWxs",
        "vid_id": "nRQBt1jDWxs"
    },
    {
        "sn": 44,
        "level": 200,
        "course_code": "CSC224",
        "modules": 1,
        "unit": 2,
        "title": "Concept of Internet Technology",
        "url": "https://youtu.be/_w6gFLtLCMU",
        "vid_id": "_w6gFLtLCMU"
    },
    {
        "sn": 45,
        "level": 200,
        "course_code": "CSC224",
        "modules": 2,
        "unit": 1,
        "title": "Markup Languages(HTML,XML,XHTML, AND DHTML) PART A",
        "url": "https://youtu.be/GZrqQbPc4Ik",
        "vid_id": "GZrqQbPc4Ik"
    },
    {
        "sn": 46,
        "level": 200,
        "course_code": "CSC224",
        "modules": 2,
        "unit": 2,
        "title": "HTML 5 Elements",
        "url": "https://youtu.be/KoMDsb1BnWc",
        "vid_id": "KoMDsb1BnWc"
    },
    {
        "sn": 47,
        "level": 200,
        "course_code": "CSC224",
        "modules": 2,
        "unit": 3,
        "title": "TAGS",
        "url": "https://youtu.be/RGepCJfT-18",
        "vid_id": "RGepCJfT-18"
    },
    {
        "sn": 48,
        "level": 200,
        "course_code": "CSC224",
        "modules": 2,
        "unit": 4,
        "title": "HTML 5 Form Elements",
        "url": "https://youtu.be/0yMGSgf3q-g",
        "vid_id": "0yMGSgf3q-g"
    },
    {
        "sn": 49,
        "level": 100,
        "course_code": "GNS111",
        "modules": "Intro",
        "unit": "",
        "title": "Use of Library",
        "url": "https://youtu.be/TWoDZcDWlxQ",
        "vid_id": "TWoDZcDWlxQ"
    },
    {
        "sn": 50,
        "level": 100,
        "course_code": "GNS111",
        "modules": "",
        "unit": "",
        "title": "Types and Functions of a Library (PART 2)",
        "url": "https://youtu.be/bpqc0DiHTaM",
        "vid_id": "bpqc0DiHTaM"
    },
    {
        "sn": 51,
        "level": 100,
        "course_code": "GNS111",
        "modules": "",
        "unit": "",
        "title": "Organization of Materials (PART 3)",
        "url": "https://youtu.be/RcvD772qSWU",
        "vid_id": "RcvD772qSWU"
    },
    {
        "sn": 52,
        "level": 100,
        "course_code": "GNS111",
        "modules": "",
        "unit": "",
        "title": "The Catalogue (PART 4)",
        "url": "https://youtu.be/0NeVaY0Slm4",
        "vid_id": "0NeVaY0Slm4"
    },
    {
        "sn": 53,
        "level": 100,
        "course_code": "ICS101",
        "modules": "Intro",
        "unit": "",
        "title": "Information Communication and Society",
        "url": "https://youtu.be/w8UEKtf8Vtc",
        "vid_id": "w8UEKtf8Vtc"
    },
    {
        "sn": 54,
        "level": 100,
        "course_code": "ICS101",
        "modules": 1,
        "unit": 1,
        "title": "Definition of Data Information and Knowledge",
        "url": "https://youtu.be/QgrsAndq3zY",
        "vid_id": "QgrsAndq3zY"
    },
    {
        "sn": 55,
        "level": 100,
        "course_code": "ICS101",
        "modules": 2,
        "unit": 1,
        "title": "Information and its Value the Value of Information",
        "url": "https://youtu.be/fWbKrlHoVkk",
        "vid_id": "fWbKrlHoVkk"
    },
    {
        "sn": 56,
        "level": 100,
        "course_code": "MAT111",
        "modules": "Intro",
        "unit": "",
        "title": "Elementary Set Theory and Numbers",
        "url": "https://youtu.be/VxUG9nL-Uz0",
        "vid_id": "VxUG9nL-Uz0"
    },
    {
        "sn": 57,
        "level": 100,
        "course_code": "MAT111",
        "modules": 1,
        "unit": 1,
        "title": "Elementary Set Theory",
        "url": "https://youtu.be/E0kCJ-ejvT4",
        "vid_id": "E0kCJ-ejvT4"
    },
    {
        "sn": 58,
        "level": 100,
        "course_code": "MAT111",
        "modules": 1,
        "unit": 2,
        "title": "Union, Intersection and Complement of a Set",
        "url": "https://youtu.be/v4ZniBYnqAs",
        "vid_id": "v4ZniBYnqAs"
    },
    {
        "sn": 59,
        "level": 100,
        "course_code": "MAT111",
        "modules": 1,
        "unit": 4,
        "title": "Real Numbers",
        "url": "https://youtu.be/tEsnLlliu6w",
        "vid_id": "tEsnLlliu6w"
    },
    {
        "sn": 60,
        "level": 100,
        "course_code": "MAT111",
        "modules": 1,
        "unit": 5,
        "title": "Mathematical Induction",
        "url": "https://youtu.be/yWm77J7-7Is",
        "vid_id": "yWm77J7-7Is"
    },
    {
        "sn": 61,
        "level": 100,
        "course_code": "MAT111",
        "modules": 2,
        "unit": 1,
        "title": "Sequence",
        "url": "https://youtu.be/Agfo_wdwoqg",
        "vid_id": "Agfo_wdwoqg"
    },
    {
        "sn": 62,
        "level": 100,
        "course_code": "MAT111",
        "modules": 2,
        "unit": 2,
        "title": "Series",
        "url": "https://youtu.be/Pkddoq9bXrU",
        "vid_id": "Pkddoq9bXrU"
    },
    {
        "sn": 63,
        "level": 100,
        "course_code": "MAT112",
        "modules": "Intro",
        "unit": "",
        "title": "Elementary Differential and Integral Calculus",
        "url": "https://youtu.be/F8iHKRrlERs",
        "vid_id": "F8iHKRrlERs"
    },
    {
        "sn": 64,
        "level": 100,
        "course_code": "MAT112",
        "modules": 1,
        "unit": 1,
        "title": "Functions and Limit",
        "url": "https://youtu.be/L1kYzzfqpdI",
        "vid_id": "L1kYzzfqpdI"
    },
    {
        "sn": 65,
        "level": 100,
        "course_code": "MAT113",
        "modules": "Intro",
        "unit": "",
        "title": "Elementary Vectors, Geometry and Mechanics",
        "url": "https://youtu.be/Yd9BjGBmKSY",
        "vid_id": "Yd9BjGBmKSY"
    },
    {
        "sn": 66,
        "level": 100,
        "course_code": "MAT113",
        "modules": 1,
        "unit": 1,
        "title": "Vector Representation by a Straight Line",
        "url": "https://youtu.be/57Upp6ZXqpk",
        "vid_id": "57Upp6ZXqpk"
    },
    {
        "sn": 67,
        "level": 100,
        "course_code": "MAT113",
        "modules": 1,
        "unit": 2,
        "title": "Component of a Vector in Three Dimension",
        "url": "https://youtu.be/iwge6TzTS44",
        "vid_id": "iwge6TzTS44"
    },
    {
        "sn": 68,
        "level": 100,
        "course_code": "MAT113",
        "modules": 1,
        "unit": 3,
        "title": "Direction Cosines of a Vector",
        "url": "https://youtu.be/iPcUTIHwQ4A",
        "vid_id": "iPcUTIHwQ4A"
    },
    {
        "sn": 69,
        "level": 100,
        "course_code": "MAT113",
        "modules": 2,
        "unit": 1,
        "title": "Addition and Multiplication of Vector",
        "url": "https://youtu.be/Kql-d0Xh_kE",
        "vid_id": "Kql-d0Xh_kE"
    },
    {
        "sn": 70,
        "level": 100,
        "course_code": "MAT113",
        "modules": 2,
        "unit": 2,
        "title": "Scalar Product of Two Vectors",
        "url": "https://youtu.be/wa1m9lp78V8",
        "vid_id": "wa1m9lp78V8"
    },
    {
        "sn": 71,
        "level": 100,
        "course_code": "MAT113",
        "modules": 2,
        "unit": 3,
        "title": "Vector Products of Two Vectors",
        "url": "https://youtu.be/1tKz3lZ0Sig",
        "vid_id": "1tKz3lZ0Sig"
    },
    {
        "sn": 72,
        "level": 200,
        "course_code": "MAT201",
        "modules": "Intro",
        "unit": "",
        "title": "Mathematical Methods 1",
        "url": "https://youtu.be/l8A3hcYqUn8",
        "vid_id": "l8A3hcYqUn8"
    },
    {
        "sn": 73,
        "level": 200,
        "course_code": "MAT201",
        "modules": 1,
        "unit": 1,
        "title": "Functions of a Real Variable",
        "url": "https://youtu.be/CbJILDE7Ny0",
        "vid_id": "CbJILDE7Ny0"
    },
    {
        "sn": 74,
        "level": 200,
        "course_code": "MAT206",
        "modules": "Intro",
        "unit": "",
        "title": "Linear Algebra II",
        "url": "https://youtu.be/4KDv4U9Egto",
        "vid_id": "4KDv4U9Egto"
    },
    {
        "sn": 75,
        "level": 200,
        "course_code": "MAT206",
        "modules": 1,
        "unit": 1,
        "title": "System of Linear Equations",
        "url": "https://youtu.be/dxrjX3DzgIc",
        "vid_id": "dxrjX3DzgIc"
    },
    {
        "sn": 76,
        "level": 200,
        "course_code": "MAT211",
        "modules": "Intro",
        "unit": "",
        "title": "Ordinary and partial Differential",
        "url": "https://youtu.be/7w7ISZKgcrs",
        "vid_id": "7w7ISZKgcrs"
    },
    {
        "sn": 77,
        "level": 200,
        "course_code": "MAT211",
        "modules": 1,
        "unit": 1,
        "title": "First Order Differential Equations",
        "url": "https://youtu.be/-wQAFkuDLJQ",
        "vid_id": "-wQAFkuDLJQ"
    },
    {
        "sn": 78,
        "level": 100,
        "course_code": "PLB101",
        "modules": "Intro",
        "unit": "",
        "title": "INTRODUCTION",
        "url": "https://youtu.be/OSqS9mBmCGo",
        "vid_id": "OSqS9mBmCGo"
    },
    {
        "sn": 79,
        "level": 100,
        "course_code": "PLB101",
        "modules": 1,
        "unit": 1,
        "title": "Water and its Importance",
        "url": "https://youtu.be/974Lo6VaYjE",
        "vid_id": "974Lo6VaYjE"
    },
    {
        "sn": 80,
        "level": 100,
        "course_code": "PLB101",
        "modules": 1,
        "unit": 2,
        "title": "PH Importants",
        "url": "https://youtu.be/8O1ae7nUmUc",
        "vid_id": "8O1ae7nUmUc"
    },
    {
        "sn": 81,
        "level": 100,
        "course_code": "PLB101",
        "modules": 1,
        "unit": 3,
        "title": "Buffer",
        "url": "https://youtu.be/fSB2ygxDOBE",
        "vid_id": "fSB2ygxDOBE"
    },
    {
        "sn": 82,
        "level": 100,
        "course_code": "STA131",
        "modules": "Intro",
        "unit": "",
        "title": "Introduction to Statistical Inference I",
        "url": "https://youtu.be/dlPZ4_jl0KU",
        "vid_id": "dlPZ4_jl0KU"
    },
    {
        "sn": 83,
        "level": 100,
        "course_code": "STA131",
        "modules": 1,
        "unit": 1,
        "title": "Defintion of Terms in Statistics",
        "url": "https://youtu.be/eyerx9fvP9U",
        "vid_id": "eyerx9fvP9U"
    },
    {
        "sn": 84,
        "level": 100,
        "course_code": "STA131",
        "modules": 1,
        "unit": 2,
        "title": "DATA",
        "url": "https://youtu.be/foHglKU4lD8",
        "vid_id": "foHglKU4lD8"
    },
    {
        "sn": 85,
        "level": 100,
        "course_code": "STA131",
        "modules": 2,
        "unit": 1,
        "title": "Frequency Distributions",
        "url": "https://youtu.be/GmvHW-0_K2w",
        "vid_id": "GmvHW-0_K2w"
    },
    {
        "sn": 86,
        "level": 100,
        "course_code": "STA131",
        "modules": 2,
        "unit": 2,
        "title": "Graphical Representation of Data",
        "url": "https://youtu.be/qmUzLxu6_GM",
        "vid_id": "qmUzLxu6_GM"
    },
    {
        "sn": 87,
        "level": 100,
        "course_code": "STA131",
        "modules": 3,
        "unit": 1,
        "title": "Measure of Location",
        "url": "https://youtu.be/lu8ApF4Z42E",
        "vid_id": "lu8ApF4Z42E"
    },
    {
        "sn": 88,
        "level": 100,
        "course_code": "STA131",
        "modules": 3,
        "unit": 2,
        "title": "Measure of Central Tendency/Location",
        "url": "https://youtu.be/PhYRENEr6gE",
        "vid_id": "PhYRENEr6gE"
    },
    {
        "sn": 89,
        "level": 100,
        "course_code": "STA131",
        "modules": 4,
        "unit": 1,
        "title": "Measure of Dispersion/Spread",
        "url": "https://youtu.be/g_38Yefbfe4",
        "vid_id": "g_38Yefbfe4"
    },
    {
        "sn": 90,
        "level": 100,
        "course_code": "STA131",
        "modules": 4,
        "unit": 2,
        "title": "Measure of Dispersion or Spread Grouped Data",
        "url": "https://youtu.be/OznGmsg06nA",
        "vid_id": "OznGmsg06nA"
    }
];


const div_video = document.getElementById('videos');
let vids = '';
//apply filters

data.map((item) => {
    var img = getRandomElement(images);
    vids += `<div class="card col-sm-4 mb-3" >
                        <img src="${img}" class="card-img-top" />
                        <div class="card-body">
                            <h5 class="card-title"><small class="p-1  text-danger ">${item.course_code}</small> ${item.title}</h5>
                        </div>
                        <div class="card-footer text-body-secondary text-center">
                            <a href="${item.url}" target="_blank" class="btn btn-danger">Watch on Youtube</a>
                        </div>
                    </div>`;

    //console.log(item.Title)
});
vids = `<div class="row gx-3 ">${vids}</div>`;

div_video.innerHTML = vids;
//console.log(vids);

//OER Begins
const oer = [
    {
        "SN": 1,
        "name": "Algorithms and Data Structures",
        "Description": "A textbook for first-year Computer Science, covering essential concepts.",
        "Link": "https://oercommons.org/courses/algorithms-and-data-structures"
    },
    {
        "SN": 2,
        "name": "Cascading Style Sheets",
        "Description": "This book is a guide to Cascading Style Sheets (CSS), a technique widely used in web pages including Wikipedia to describe their visual style and appearance. CSS can take HTML to new places creatively and functionally. Once you learn how to style mark-up, you can additionally learn JavaScript functions that make dynamic web pages.",
        "Link": "https://oercommons.org/courses/cascading-style-sheets-2"
    },
    {
        "SN": 3,
        "name": "Database Design - 2nd Edition",
        "Description": "Covers database systems and design concepts, suitable for advanced learners.",
        "Link": "https://oercommons.org/courses/database-design-2nd-edition"
    },
    {
        "SN": 4,
        "name": "Foundations of Computation",
        "Description": "Foundations of Computation is a free textbook for a one-semester course in theoretical computer science. It has been used for several years in a course at Hobart and William Smith Colleges. The course has no prerequisites other than introductory computer programming. The first half of the course covers material on logic, sets, and functions that would often be taught in a course in discrete mathematics. The second part covers material on automata, formal languages, and grammar that would ordinarily be encountered in an upper level course in theoretical computer science.",
        "Link": "https://oercommons.org/courses/foundations-of-computation"
    },
    {
        "SN": 5,
        "name": "How to Think Like a Computer Scientist: Learning with Python",
        "Description": "Python is a fun and extremely easy-to-use programming language that has steadily gained in popularity over the last few years. Developed over ten years ago by Guido van Rossum, Python's simple syntax and overall feel is largely derived from ABC, a teaching language that was developed in the 1980's. However, Python was also created to solve real problems and it borrows a wide variety of features from programming languages such as C++, Java, Modula-3, and Scheme. Because of this, one of Python's most remarkable features is its broad appeal to professional software developers, scientists, researchers, artists, and educators. 278 page pdf file.",
        "Link": "https://oercommons.org/courses/how-to-think-like-a-computer-scientist-learning-with-python"
    },
    {
        "SN": 6,
        "name": "Operating Systems and Middleware: Supporting Controlled Interaction",
        "Description": "In this book, you will learn about all three kinds of interaction. In all three cases, interesting software techniques are needed in order to bring the computations into contact, yet keep them sufifciently at arm�s length that they don�t compromise each other�s reliability. The exciting challenge, then, is supporting controlled interaction. This includes support for computations that share a single computer and interact with one another, as your email and word processing programs do. It also includes support for data storage and network communication. This book describes how all these kinds of support are provided both by operating systems and by additional software layered on top of operating systems, which is known as middleware.",
        "Link": "https://oercommons.org/courses/operating-systems-and-middleware-supporting-controlled-interaction"
    },
    {
        "SN": 7,
        "name": "Programming Languages: Application and Interpretation",
        "Description": "Unlike some other textbooks, this one does not follow a top-down narrative. Rather it has the flow of a conversation, with backtracking. We will often build up programs incrementally, just as a pair of programmers would. We will include mistakes, not because I don�t know the answer, but because this is the best way for you to learn. Including mistakes makes it impossible for you to read passively: you must instead engage with the material, because you can never be sure of the veracity of what you�re reading.\n\nThe main programming language used in this book is Racket. Like with all operating systems, however, Racket actually supports a host of programming languages, so you must tell Racket which language you�re programming in.\n\nThis textbook has been used in classes at: Brown University, Cal Poly, Columbus State University, Northeastern University, NYU, Reed College, UC-San Diego, UC-Santa Cruz, University of Rhode Island, University of Utah, Westmont College, Williams College, and Worcester Polytechnic Institute.",
        "Link": "https://oercommons.org/courses/programming-languages-application-and-interpretation-2"
    },
    {
        "SN": 8,
        "name": "Software Engineering",
        "Description": "This course presents software engineering concepts and principles in parallel with the software development life cycle. Topics addressed include the Software Development Life Cycle (SDLC), software modeling using Unified Modeling Language (UML), major phases of SDLC (Software Requirements and Analysis, Software Design, and Software Testing), and project management. Upon successful completion of this course, the student will be able to: demonstrate mastery of software engineering knowledge and skills, and professional issues necessary to practice software engineering; discuss principles of software engineering; describe software development life cycle models; learn principles of software modeling through UML as a modeling language; identify major activities and key deliverables in a software development life cycle during software requirements and analysis, software design, and software testing; apply the object-oriented methodology in software engineering to create UML artifacts for software analysis and requirements, software design, and software testing; apply project management concepts in a software engineering environment to manage project, people, and product; participate as an individual and as part of a team to deliver quality software systems. This free course may be completed online at any time. (Computer Science 302)",
        "Link": "https://oercommons.org/courses/software-engineering"
    },
    {
        "SN": 9,
        "name": "Think Complexity",
        "Description": "This book is about complexity science, data structures and algorithms, intermediate programming in Python, and the philosophy of science. This book focuses on discrete models, which include graphs, cellular automata, and agent-based models. They are often characterized by structure, rules and transitions rather than by equations. They tend to be more abstract than continuous models; in some cases there is no direct correspondence between the model and a physical system.",
        "Link": "https://oercommons.org/courses/think-complexity"
    },
    {
        "SN": 10,
        "name": "Think OS: A Brief Introduction to Operating Systems",
        "Description": "Think OS is an introduction to Operating Systems for programmers. In many computer science programs, Operating Systems is an advanced topic. By the time students take it, they usually know how to program in C, and they have probably taken a class in Computer Architecture. Usually the goal of the class is to expose students to the design and implementation of operating systems, with the implied assumption that some of them will do research in this area, or write part of an OS.",
        "Link": "https://oercommons.org/courses/think-os-a-brief-introduction-to-operating-systems"
    },
    {
        "SN": 11,
        "name": "Think Python 2e",
        "Description": "Think Python is an introduction to Python programming for beginners. It starts with basic concepts of programming, and is carefully designed to define all terms when they are first used and to develop each new concept in a logical progression. Larger pieces, like recursion and object-oriented programming are divided into a sequence of smaller steps and introduced over the course of several chapters.",
        "Link": "https://oercommons.org/courses/think-python-an-introduction-to-software-design"
    },
    {
        "SN": 12,
        "name": "Ways to Study",
        "Description": "Scientific research and design is traditionally made to be published in books or magazines by use of text and images. The arrival of digital media and internet changed this dramatically and allowed new possibilities and far better accessibility of this work. Be this as it may, it is still paramount that the accuracy and completeness of published scientific work is maintained. This course will focus on this integrated concept, the learning of how to successfully make and publish your own website. In 6 lectures the several aspects of traditional scientific research will be treated by using the contemporary media. The course has the following study goals, that correspond with the given assignments and lectures: publishing own study and design work; making your work retrievable for others by use of key words; making use of digital media to describe own work; describing and evaluating of own work; making a bibliography and iconography; intrepretenting an image as a scientific document;describing in key words; compare images scientifically; deducting design types from image comparison; deducting design concepts from image comparison; deducting design models from image comparison; deducting design programs from image comparison; integrating different design concepts and becoming acquainted with research methods; defining an object of research, problem field, target field, design tools, own competence and context of research; formulating a site, context factors, motivation, design program, contribution, intended results and planning; justifying, referring and concluding of own work; giving and receiving professional critique.",
        "Link": "https://oercommons.org/courses/ways-to-study"
    },
    {
        "SN": 13,
        "name": "How to Think Like a Computer Scientist: C++ Version",
        "Description": "Focuses on problem-solving skills essential for computer scientists.",
        "Link": "https://oercommons.org/courses/how-to-think-like-a-computer-scientist-c-version"
    },
    {
        "SN": 14,
        "name": "Introduction to the Modeling and Analysis of Complex Systems",
        "Description": "Introduces students to the modeling and analysis of complex systems.",
        "Link": "https://oercommons.org/courses/introduction-to-the-modeling-and-analysis-of-complex-systems"
    },
    {
        "SN": 15,
        "name": "Open Data Structures",
        "Description": "Aims to free undergraduate computer science students from the cost of textbooks.",
        "Link": "https://oercommons.org/courses/open-data-structures"
    },
    {
        "SN": 16,
        "name": "Collection of Books in Computer Science",
        "Description": "A collection of books on computer science",
        "Link": "https://collection.bccampus.ca/subjects/computer-science/?viewAllTextbooks=true"
    }
];

const div_oer = document.getElementById('oers');
let oers = '';
//apply filters
oer.map((item) => {
    var img = getRandomElement(oerImages);
    oers += `<div class="card col-sm-4 mb-3" >
                        <img src="${img}" class="card-img-top" />
                        <div class="card-body">
                            <h5 class="card-title">${item.name}</h5>
                            <p>${item.Description}</p>
                        </div>
                        <div class="card-footer text-body-secondary text-center">
                            <a href="${item.Link}" target="_blank" class="btn btn-danger">Download Resource</a>
                        </div>
                    </div>`;

    //console.log(item.Title)
});
oers = `<div class="row gx-3 ">${oers}</div>`;

div_oer.innerHTML = oers;
//console.log(vids);
 
//pdf files
const docs = [
    {
        "sn": 1,
        "courseCode": "CSC 111",
        "courseTitle": "Introduction to Computer Science 1",
        "filename": "CSC111.pdf",
        "fileType": "pdf"
    },
    {
        "sn": 2,
        "courseCode": "CSC 112",
        "courseTitle": "Introduction to Computer Science 2",
        "filename": "CSC112.pdf",
        "fileType": "pdf"
    },
    {
        "sn": 3,
        "courseCode": "CSC 212",
        "courseTitle": "Computer Programing 2",
        "filename": "CSC212.pdf",
        "fileType": "pdf"
    },
    {
        "sn": 4,
        "courseCode": "CSC 214",
        "courseTitle": "File Processing",
        "filename": "CSC214.pdf",
        "fileType": "pdf"
    },
    {
        "sn": 5,
        "courseCode": "CSC 216",
        "courseTitle": "Assembly language",
        "filename": "CSC216.pdf",
        "fileType": "pdf"
    },
    {
        "sn": 6,
        "courseCode": "CSC 222",
        "courseTitle": "Database design & managent 1",
        "filename": "CSC222.pdf",
        "fileType": "pdf"
    },
    {
        "sn": 7,
        "courseCode": "CSC 224",
        "courseTitle": "Internet technology 1",
        "filename": "CSC224.pdf",
        "fileType": "pdf"
    },
    {
        "sn": 8,
        "courseCode": "CSC 230",
        "courseTitle": "Computer Architecture",
        "filename": "CSC230.pdf",
        "fileType": "pdf"
    },
    {
        "sn": 9,
        "courseCode": "CSC 231",
        "courseTitle": "Computer Programing 1",
        "filename": "CSC231.pdf",
        "fileType": "pdf"
    },
    {
        "sn": 10,
        "courseCode": "CSC 233",
        "courseTitle": "Object oriented Programming usin Java",
        "filename": "CSC233.pdf",
        "fileType": "pdf"
    },
    {
        "sn": 11,
        "courseCode": "CSC 101",
        "courseTitle": "Inoformation, Communicatio Society",
        "filename": "CSC101.pdf",
        "fileType": "pdf"
    },
    {
        "sn": 12,
        "courseCode": "CSC 106",
        "courseTitle": "Information litracy for the digital age",
        "filename": "CSC106.pdf",
        "fileType": "pdf"
    },
    {
        "sn": 13,
        "courseCode": "MAT 111",
        "courseTitle": "Elementry set theory and numbers",
        "filename": "MAT111.pdf",
        "fileType": "pdf"
    },
    {
        "sn": 14,
        "courseCode": "MAT 113",
        "courseTitle": "Elementry vector, geometry and mechanics",
        "filename": "MAT113.pdf",
        "fileType": "pdf"
    },
    {
        "sn": 15,
        "courseCode": "MAT 114",
        "courseTitle": "Elementry Algebra and trigonometry",
        "filename": "MAT114.pdf",
        "fileType": "pdf"
    },
    {
        "sn": 16,
        "courseCode": "MAT 201",
        "courseTitle": "Mathematical methods 1",
        "filename": "MAT201.pdf",
        "fileType": "pdf"
    },
    {
        "sn": 17,
        "courseCode": "MAT 206",
        "courseTitle": "Linear algebra 2",
        "filename": "MAT206.pdf",
        "fileType": "pdf"
    },
    {
        "sn": 18,
        "courseCode": "MAT 211",
        "courseTitle": "Ordinary & partial differential equations",
        "filename": "MAT211.pdf",
        "fileType": "pdf"
    },
    {
        "sn": 19,
        "courseCode": "MAT 213",
        "courseTitle": "Linear algebra 1",
        "filename": "MAT213.pdf",
        "fileType": "pdf"
    },
    {
        "sn": 20,
        "courseCode": "PHY 115",
        "courseTitle": "Mechanics and Properties of Matter",
        "filename": "PHY115.doc",
        "fileType": "docx"
    },
    {
        "sn": 21,
        "courseCode": "PHY 191",
        "courseTitle": "Practical physics I",
        "filename": "PHY191.doc",
        "fileType": "docx"
    },
    {
        "sn": 22,
        "courseCode": "STA 121",
        "courseTitle": "Introduction to probability",
        "filename": "STA121.pdf",
        "fileType": "pdf"
    },
    {
        "sn": 23,
        "courseCode": "STA 124",
        "courseTitle": "Introduction to probability distribution",
        "filename": "STA124.pdf",
        "fileType": "pdf"
    },
    {
        "sn": 24,
        "courseCode": "STA 131",
        "courseTitle": "Introductio to statistical inference 1",
        "filename": "STA131.pdf",
        "fileType": "pdf"
    },
    {
        "sn": 25,
        "courseCode": "STA 203",
        "courseTitle": "Staistic for physical science and enginnering",
        "filename": "STA203.pdf",
        "fileType": "pdf"
    },
    {
        "sn": 26,
        "courseCode": "STA 206",
        "courseTitle": "Staistic for physical science and enginnering 2",
        "filename": "STA206.pdf",
        "fileType": "pdf"
    },
    {
        "sn": 27,
        "courseCode": "STA 221",
        "courseTitle": "Pobability distribution 1",
        "filename": "STA221.pdf",
        "fileType": "pdf"
    },
    {
        "sn": 28,
        "courseCode": "TCS 111",
        "courseTitle": "Inroduction to Telecommunication",
        "filename": "TCS111.pdf",
        "fileType": "pdf"
    },
    {
        "sn": 29,
        "courseCode": "TCS 112",
        "courseTitle": "Telecomunication and networks 1",
        "filename": "TCS112.pdf",
        "fileType": "pdf"
    }
];

const div_pdf = document.getElementById('pdfs');
let mat = '';

docs.map(docu => {
    var images = '';
    if (docu.fileType == 'pdf') {
        images = 'assets/images/pdf.png';
    } else {
        images = 'assets/images/word.jpg';
    }
    const folders = 'assets/Courseware-Ready/';
    mat += `<div class="card col-sm-3 mb-3">
                    <img src="${images}" class="card-img-top mx-auto pt-3" style="width:45%"/>
                    <div class="card-body">
                        <h5 class="card-title"><small class="p-1 text-info">${docu.courseCode}</small> ${docu.courseTitle}</h5>
                    </div>
                    <div class="card-footer text-body-secondary text-center">
                        <a href="${folders}${docu.filename}" target="_blank" class="btn btn-danger">Open Document</a>
                    </div>
                </div>`;
});

mat += `<div class="row gx-3">${mat}</div>`;
div_pdf.innerHTML = mat;
//PDF Ends

//Lazyloader Starts
document.addEventListener("DOMContentLoaded", function () {
    var lazyVideos = [].slice.call(document.querySelectorAll("iframe.lazy"));

    if ("IntersectionObserver" in window) {
        let lazyVideoObserver = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    let lazyVideo = entry.target;
                    lazyVideo.src = lazyVideo.dataset.src;
                    lazyVideo.classList.remove("lazy");
                    lazyVideoObserver.unobserve(lazyVideo);
                }
            });
        });

        lazyVideos.forEach(function (lazyVideo) {
            lazyVideoObserver.observe(lazyVideo);
        });
    }
});



