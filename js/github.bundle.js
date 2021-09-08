window.onload = (e) => {
    console.log("Welcome to the Weeby Blog!");
    console.log("This website is avaiable on github!");
}

const suggestions = [
    "About me"
];

const blogs = [{
    title: "About me",
    description: "The initial blog to tell more about myself and this website!",
    banner: "aboutme.svg",
    bannerstyle: "",
    href: "/blog/aboutme"
}];

window.oncontextmenu = (e) => e.preventDefault();