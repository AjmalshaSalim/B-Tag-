import React from 'react'
import { useParams } from 'react-router-dom';

const cardData = [
  {
    id:1,
    imageUrl: 'https://images.pexels.com/photos/6457579/pexels-photo-6457579.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Cert IV in Leadership & Management ',
    description: 'Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country... ',
    detailedDescription:"Lorem ipsum dolor sit amet consectetur. Purus rhoncus feugiat pellentesque vel eget aliquet egestas non dignissim.In convallis platea mi habitant. Velit a at dictum commodo lacus fermentum. Lorem erat in dolor cursus sollicitudinin dignissim consectetur sit. A ac neque habitant aenean tortor. Hendrerit tempor mattis nunc enim enim. Nulla sitmassa lectus urna. Donec vivamus pretium sapien eget posuere pellentesque tempor id. Commodo molestieinteger vel sed eleifend. Volutpat in convallis tempus morbi est varius habitasse sagittis. Posuere commodo.Lorem ipsum dolor sit amet consectetur. In viverra tincidunt accumsan arcu accumsan nam. Morbi non feugiatelementum sagittis. Sed felis et eu sed felis ligula id ut. Turpis curabitur turpis tortor varius. Vel aliquam nisl gravidaenim. Elit nunc tempor tempor viverra odio habitasse blandit turpis in. Pulvinar diam vestibulum amet nuncpellentesque. Viverra egestas rutrum mi gravida et. Pharetra ullamcorper elit mattis convallis dignissim eu dignissimrhoncus fermentum. Sagittis morbi tempor lectus leo volutpat maecenas sagittis. Maecenas risus velit sollicitudin.",
  },
  {
    id:2,
    imageUrl: 'https://images.pexels.com/photos/6457544/pexels-photo-6457544.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Cert IV in communication & Digital Marketing ',
    description: 'Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country ...',
    detailedDescription:"Lorem ipsum dolor sit amet consectetur. Purus rhoncus feugiat pellentesque vel eget aliquet egestas non dignissim.In convallis platea mi habitant. Velit a at dictum commodo lacus fermentum. Lorem erat in dolor cursus sollicitudinin dignissim consectetur sit. A ac neque habitant aenean tortor. Hendrerit tempor mattis nunc enim enim. Nulla sitmassa lectus urna. Donec vivamus pretium sapien eget posuere pellentesque tempor id. Commodo molestieinteger vel sed eleifend. Volutpat in convallis tempus morbi est varius habitasse sagittis. Posuere commodo.Lorem ipsum dolor sit amet consectetur. In viverra tincidunt accumsan arcu accumsan nam. Morbi non feugiatelementum sagittis. Sed felis et eu sed felis ligula id ut. Turpis curabitur turpis tortor varius. Vel aliquam nisl gravidaenim. Elit nunc tempor tempor viverra odio habitasse blandit turpis in. Pulvinar diam vestibulum amet nuncpellentesque. Viverra egestas rutrum mi gravida et. Pharetra ullamcorper elit mattis convallis dignissim eu dignissimrhoncus fermentum. Sagittis morbi tempor lectus leo volutpat maecenas sagittis. Maecenas risus velit sollicitudin.",
  },
  {
    id:3,
    imageUrl: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Cert IV Hospitality ',
    description: 'Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country ...',
    detailedDescription:"Lorem ipsum dolor sit amet consectetur. Purus rhoncus feugiat pellentesque vel eget aliquet egestas non dignissim.In convallis platea mi habitant. Velit a at dictum commodo lacus fermentum. Lorem erat in dolor cursus sollicitudinin dignissim consectetur sit. A ac neque habitant aenean tortor. Hendrerit tempor mattis nunc enim enim. Nulla sitmassa lectus urna. Donec vivamus pretium sapien eget posuere pellentesque tempor id. Commodo molestieinteger vel sed eleifend. Volutpat in convallis tempus morbi est varius habitasse sagittis. Posuere commodo.Lorem ipsum dolor sit amet consectetur. In viverra tincidunt accumsan arcu accumsan nam. Morbi non feugiatelementum sagittis. Sed felis et eu sed felis ligula id ut. Turpis curabitur turpis tortor varius. Vel aliquam nisl gravidaenim. Elit nunc tempor tempor viverra odio habitasse blandit turpis in. Pulvinar diam vestibulum amet nuncpellentesque. Viverra egestas rutrum mi gravida et. Pharetra ullamcorper elit mattis convallis dignissim eu dignissimrhoncus fermentum. Sagittis morbi tempor lectus leo volutpat maecenas sagittis. Maecenas risus velit sollicitudin.",
  },
  
];

function CardDetail() {

    const {id}=useParams()
    const card=cardData.find((each) => each.id === parseInt(id))



  return (
    <div className='overflow-hidden  px-[50px]' >
       <div className='px-[100px]'>
          <div>
            <h1>{card.title}</h1>
          </div>
          <div className='bg-black h-[385px] overflow-hidden'>
            <img src={card.imageUrl} alt={card.title} className='w-full h-full object-cover  '/>
          </div>
          <div>
            <p>{card.detailedDescription}</p>
          </div>
       </div>
    </div>
  )
}

export default CardDetail