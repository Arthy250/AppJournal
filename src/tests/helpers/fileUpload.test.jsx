import { fileUpload } from "../../helpers/fileUpload";
import cloudinary from 'cloudinary'

cloudinary.config({ 
  cloud_name: 'doorgyh8s', 
  api_key: '268331773683756', 
  api_secret: 'zrQBUPQFWmmW3JgyfTPja581O1I' 
});

describe('Puebas en fileUpload', () => {
  
  test('Debe de cargar un archivo y retornar la URL', async() => {
    
    const resp = await fetch('https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png');
    const blob = await resp.blob();

    const file = new File([blob], 'foto.png');
    const url = await fileUpload (file);

    expect( typeof url ).toBe('string');

    // Borrar imagen por ID
    const segments = url.split('/')
    const imageID = segments[ segments.length - 1 ].replace('.png','');
    
    await cloudinary.v2.api.delete_resources(imageID);

  });

  test('Debe de retornar un error', async () => {
    
    const file = new File([], 'foto.png');
    const url = await fileUpload (file);

    expect( url ).toBe(null);

  });
  
});