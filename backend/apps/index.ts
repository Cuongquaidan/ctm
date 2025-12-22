// import dotenv from 'dotenv';
// import App from '@src/App.js';
// try {
//     dotenv.config({ override: true });
//     App.run();
// } catch (error: any) {
//     console.log(error.message);
// }
import dotenv from 'dotenv';
dotenv.config({ override: true });

import App from '@src/App.js';

try {
    App.run();
} catch (error: any) {
    console.log(error.message);
}
