import axios from 'axios';
import {CreateNote, INote} from './interfaces'

const _url = 'https://m66nqp6pe8.eu-west-1.awsapprunner.com/';


const getNotes = async () => {
    try{
        const res = await axios({
            method: 'GET',
            url: `${_url}note`,
            headers: { 
                'Content-Type': 'application/json'
            },
        })
        return res.data as INote[];

    }catch(err){
        console.log(err);
    }
}

const createNote = async (obj:CreateNote) => {
    try{
        if (!obj.tags){
            obj.tags = [];
        }
        console.log(obj)
        const res = await axios({
            method: 'POST',
            url: `${_url}note`,
            headers: { 
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(obj)
        })
        return res.data as INote;

    }catch(err){
        console.log(err);
    }
}

const deleteNote = async (id:string) => {
    try{
        const res = await axios({
            method: 'DELETE',
            url: `${_url}note/${id}`,
            headers: { 
                'Content-Type': 'application/json'
            },
        })
        return res.data;

    }catch(err){
        console.log(err);
    }
}

const editNote = async ({obj, id}: {obj:CreateNote, id:string}) => {
    try{
        const res = await axios({
            method: 'PUT',
            url: `${_url}note/${id}`,
            data: JSON.stringify(obj),
            headers: { 
                'Content-Type': 'application/json'
            },
        })
        return res.data;

    }catch(err){
        console.log(err);
    }
}

export {getNotes, createNote, deleteNote, editNote};