// import mongoose from 'mongoose';
// import app from './app';
// import config from './app/config';

// async function main() {
//   try {
//     await mongoose.connect(config.database_url as string)
//     .then

//     app.listen(config.port, () => {
//       console.log(`app is listening on port ${config.port}`);
//     });
//   } catch (err) {
//     console.log(err);
//   }
// }

// main();
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import app from './app';
import config from './app/config';

dotenv.config();



mongoose
  .connect(config.database_url as string)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(config.port, () => console.log(`Server running on port ${config.port}`));
  })
  .catch((err) => console.error('Database connection error:', err));
