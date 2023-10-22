import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { NextAuthOptions } from "next-auth"
import GitHubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"



export const options: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const user = { id: "1", name: "ali", password: "ali123" };

        if (credentials?.username == user.name && credentials.password == user.password) {
          return user;
        } else {
          return null;

        }
      },
    }),
    ],
    pages: {
      signIn:"/"  
    },
  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },
};




// export const OPTIONS: NextAuthOptions = {
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET
//     }),
//     GitHubProvider({
//       clientId: process.env.GITHUB_ID as string,
//       clientSecret: process.env.GITHUB_SECRET as string,
//     }),    
//     CredentialsProvider({     
//       credentials: {
//         email: { label: "Email", type: "text" },
//         password: { label: "Password", type: "password" }
//       },
//       async authorize (credentials, req) {
    
//         if (typeof credentials !== "undefined") {
          
       
//           return null
//         }
        
        
        
//         // const user = { id: '1', name: 'J Smith', email: 'test@example.com', password: 'secret123' }

//         // if (user &&
//         //     user?.email === credentials?.email &&
//         //     user?.password === credentials?.password) {
//         //   return user
//         // }

//         // return null
//       }
//     }),

    
   
//     /*Credentials({
//       name: "Credentials",
//       credentials: {
//         username: { label: "Username", type: "text" },
//         password: { label: "Password", type: "password" }
//       },
//       async authorize(credentials, req) {
//         try {
//           const res = await fetch("https://kartax-api-py.vercel.app/usuario-logearse/", {
//             cache: "no-store",
//             method: "POST",
//             headers: {
//               "Accept": "application/json",
//               "Content-Type": "application/x-www-form-urlencoded",
//             },
//             body: `grant_type=&username=${credentials.username}&password=${credentials.password}&scope=&client_id=&client_secret=`,
//           })  
 
//           const data = await res.json()
//           console.log(data)

//           if (!res.ok) {
//             return null
//           } else {
//             const user = { name: credentials.username, email: credentials.username }
//             return user
//           }
//         } catch (err) {
//           return null
//         }
//       }
//     })*/
//   ],
//   session: { strategy: "jwt" },
//   pages: {
//     signIn: '/user/login',
//     // signOut: '/auth/signout',
//     // error: '/auth/error',
//     // verifyRequest: '/auth/verify-request',
//     // newUser: '/auth/new-user'
//   },
// }

const handler = NextAuth(options)

export { handler as GET, handler as POST } 

// const handler = NextAuth({
//   providers: [
//     CredentialsProvider({
//       // The name to display on the sign in form (e.g. 'Sign in with...')
//       name: "Credentials",

//       credentials: {
//         username: {
//           label: "Email",
//           name: "email",
//           type: "text",
//           value: "user1@yopmail.com",
//         },
//         password: { label: "Password", type: "password", value: "1234" },
//       },
//       async authorize(credentials, req) {
//         const res = await fetch(
//           "https://acewebx-crm-api.web-xperts.xyz/api/v1.0.0/auth/login",
//           {
//             method: "POST",
//             body: JSON.stringify(credentials),
//             headers: { "Content-Type": "application/json" },
//           }
//         );
//         const user = await res.json();
//         // If no error and we have user data, return it
//         if (res.ok && user) {
//           return user.data;
//         }
//         // Return null if user data could not be retrieved
//         return null;
//       },
//     }),
//   ],
//   pages: {
//     signIn: "/auth/signin",
//   },
//   callbacks: {
//     // Callback Reff: https://stackoverflow.com/questions/71185287/pass-more-data-to-session-in-next-auth
//     async jwt({ token, user }) {
//       // the user present here gets the same data as received from DB call  made above -> fetchUserInfo(credentials.opt)
//       return { ...token, ...user };
//     },
//     async session({ session, token, user }) {
//       return {
//         user: {
//           email: "test@test.com",
//           id: token.id,
//           userName: token.userName,
//           accessToken: token.accessToken,
//           image:
//             "https://www.pngmart.com/files/22/User-Avatar-Profile-PNG-Isolated-Transparent-Picture.png",
//         },
//       };
//     },
//   },
// });

// export { handler as GET, handler as POST };