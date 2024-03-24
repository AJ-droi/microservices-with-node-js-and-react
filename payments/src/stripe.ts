import Stripe from 'stripe';

export const stripe = new Stripe(process.env.STRIPE_KEY!, {
  apiVersion: '2022-11-15',
});


// import axios from 'axios';

// export const flutter = async (amount:number) => {

//   try {
//     const response = await axios.post("https://api.flutterwave.com/v3/payments", {
//         headers: {
//             Authorization: `Bearer ${process.env.FLW_KEY!}`
//         },
//         json: {
//             tx_ref: "hooli-tx-1920bbtytty",
//             amount: `${amount}`,
//             currency: "NGN",
//             redirect_url: "https://webhook.site/9d0b00ba-9a69-44fa-a43d-a82c33c36fdc",
//             // meta: {
//             //     consumer_id: 23,
//             //     consumer_mac: "92a3-912ba-1192a"
//             // },
//             // customer: {
//             //     email: "user@gmail.com",
//             //     phonenumber: "080****4528",
//             //     name: "Yemi Desola"
//             // },
//             // customizations: {
//             //     title: "Pied Piper Payments",
//             //     logo: "http://www.piedpiper.com/app/themes/joystick-v27/images/logo.png"
//             // }
//         }
//     })

//     return response.data.link
// } catch (err:any) {
//     console.log(err.code);
//     console.log(err.response.body);
// }

// }

