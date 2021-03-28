import React from 'react';
// import firebase from './firebase';


function OurStore() {

    // const [center, setCenter] =   useState([]);
    // const [loading, setLoading] =  useState(false);


    
    // const ref= firebase.firestore().collection("service-center");

    // function getCenter() {
    //     setLoading(true);
    //     ref.onSnapshot((querySnapshot) => {
    //         const items=  [];
    //         querySnapshot.forEach((doc) =>{
    //             items.push(doc.data())
    //         });
    //         setCenter(items);
    //         setLoading(false);
    //     })
    // }

    // useEffect(() => {
    //     getCenter();
    // },
    // []);

    // if (loading) {
    //     return <h1>Loading...... </h1>;
    // }

    return (
        <div className="ourstore">
            <div className="servicecenter__details">
                <div className="servicecenter__image">

                </div>
                <div className="servicecenter__name">
                    Reliable Car Care
                </div>
                <div className="servicecenter__ecommlink">
                    {/* <Link to="/our-store"> Swtich to Store</Link> */}
                </div>
                <div className="servicecenter__contact">
                    <div className="servicecenter__phone">
                        +91-9826544884
                    </div>
                    <div className="servicecenter__mail">
                        xyy@example.com
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurStore
