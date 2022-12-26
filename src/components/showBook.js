import React from 'react';
import { useState } from 'react';
import { book } from './services/db';

function Project(){
    const result=  book()
    console.log(result);
}
export default Project