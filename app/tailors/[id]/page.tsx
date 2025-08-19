// import { connectToDatabase } from '@/utils/mongodb';
// import { ObjectId } from 'mongodb';
// import { Tailor } from '../../types/tailor';

// interface Props {
//   params: { id: string };
// }

// export default async function TailorProfile({ params }: Props) {
//   const { db } = await connectToDatabase();
//   const tailor = await db.collection<Tailor>('tailors').findOne({ _id: new ObjectId(params.id) });

//   if (!tailor) {
//     return <h1>Tailor not found</h1>;
//   }

//   return (
//     <div>
//       <h1>{tailor.name}</h1>
//       <p>Email: {tailor.email}</p>
//       <p>Phone: {tailor.phone}</p>
//       <p>Services: {tailor.services.join(', ')}</p>
//       <p>Experience: {tailor.experience}</p>
//       {tailor.photos.length > 0 && (
//         <div>
//           {tailor.photos.map((photo, index) => (
//             <img key={index} src={photo} alt="Tailor work" width="200" />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }
 // app/users/[id]/page.js
 import { connectToDatabase } from '@/utils/mongodb';
import { ObjectId } from 'mongodb';
import { Tailor } from '../../types/tailor';

interface TailorProfileProps {
  params: {
    id: string;
  };
}
export default async function TailorProfile({ params: { id } }: TailorProfileProps) {
  const { db } = await connectToDatabase();

  let tailor: Tailor | null = null;

  try {
    tailor = await db
      .collection<Tailor>('tailors')
      .findOne({ id: new ObjectId(id) });
  } catch (error) {
    console.error('Invalid ObjectId:', error);
    return <h1>Invalid tailor ID</h1>;
  }

  if (!tailor) {
    return <h1>Tailor not found</h1>;
  }

  return (
    <div>
      <h1>{tailor.name}</h1>
      <p>Email: {tailor.email}</p>
      <p>Phone: {tailor.phone}</p>
      <p>Services: {tailor.services?.join(', ')}</p>
      <p>Experience: {tailor.experience}</p>

      {tailor.photos?.length > 0 && (
        <div>
          {tailor.photos.map((photo, index) => (
            <img key={index} src={photo} alt={`Tailor work ${index + 1}`} width="200" />
          ))}
        </div>
      )}
    </div>
  );
}

// export default async function TailorProfile({ params }: TailorProfileProps) {
//   const { id } = params;
//   const { db } = await connectToDatabase();

//   let tailor: Tailor | null = null;

//   try {
//     tailor = await db
//       .collection<Tailor>('tailors')
//       .findOne({ _id: new ObjectId(id) });
//   } catch (error) {
//     console.error('Invalid ObjectId:', error);
//     return <h1>Invalid tailor ID</h1>;
//   }

//   if (!tailor) {
//     return <h1>Tailor not found</h1>;
//   }

//   return (
//     <div>
//       <h1>{tailor.name}</h1>
//       <p>Email: {tailor.email}</p>
//       <p>Phone: {tailor.phone}</p>
//       <p>Services: {tailor.services?.join(', ')}</p>
//       <p>Experience: {tailor.experience}</p>

//       {tailor.photos?.length > 0 && (
//         <div>
//           {tailor.photos.map((photo, index) => (
//             <img key={index} src={photo} alt={`Tailor work ${index + 1}`} width="200" />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }
