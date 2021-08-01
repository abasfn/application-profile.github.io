import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from '../component/input/input.component';
import ProfileBoxs, { Model } from '../component/profileboxs/profileboxs';
import ProfileTitle from '../component/profiletitle/profiletitle.component';

const MainPage = () => {
    const model = [
        { title: 'Roger Hulg', paragraph: 'Hey, can i ask something? i need your help please', minutes: '15 min', profile: 'image/Avatar4.PNG', id: 0 },
        { title: 'Hilman Nuris', paragraph: 'thank’s for your information dude!', minutes: 'Yesterday', profile: 'image/Avatar5.JPG', id: 1 },
        { title: 'Erick Lawrence', paragraph: 'Did you take the free illustration class yesterday?', minutes: 'Yesterday', profile: 'image/Avatar 6.JPG', id: 2 },
        { title: 'Jennifer Dunn', paragraph: 'Hey Samuel, where did you get your point? can we exchange?', minutes: '2 week ago', profile: 'image/Avatar 7.PNG', id: 3 },
        { title: 'Andy Warhol', paragraph: 'that’s true bro, hahaha', minutes: '2 week ago', profile: 'image/Avatar 8.JPG', id: 4 },
        { title: 'Thomas Partrey', paragraph: 'nice sam', minutes: '2 week ago', profile: 'image/Avatar 9.JPG', id: 5 },
    ]
    const [modle, setmodel] = useState<Model[]>([...model])
    const [data, setdata] = useState<string>('')
    const onChangeInput = (e: any) => {
        setdata(e.target.value)
    }
    const handelInput = (e: any) => {
        if (e.key === 'Enter') {
            let contaner = modle.filter(item => item.title.search(data) >= 0);
            setmodel(contaner)
        }
        if (data === '') {
            setmodel(model)
        }
    }
    return (

        <div className='p-3'>
            <ProfileTitle titleClassName='mt-0.5' srcImage='image/notification.PNG' title='My Messages' paragraph='2 new messages' profile='image/Avatar 1.PNG' />
            <Input onKeyDown={handelInput} onChange={onChangeInput} className='mt-8' placeholder="Search here" />
            <Link to='/datapage'><ProfileBoxs model={modle}/></Link>
        </div>
    );
};

export default MainPage;