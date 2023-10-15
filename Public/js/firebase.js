let firebaseConfig = {
    // Enter your firebase credentials

        apiKey: "AIzaSyAZDf0n8UWWtEXtEljFCTVRY7fY0_DvSBg",
        authDomain: "blog-website-80419.firebaseapp.com",
        projectId: "blog-website-80419",
        storageBucket: "blog-website-80419.appspot.com",
        messagingSenderId: "1051315674386",
        appId: "1:1051315674386:web:98218b44a7c7d5631927cb"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();