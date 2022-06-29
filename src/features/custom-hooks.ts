import {useEffect, useState} from 'react';
import {getNotes, createNote, deleteNote, editNote} from '../utils/api';
import {INote} from '../utils/interfaces';

const useData = ({notes, setNotes} : {notes:INote[], setNotes:React.Dispatch<React.SetStateAction<INote[]>>}) => {

    useEffect(() => {
        console.log("sah !")
    }, [notes]);

};

export {useData};