import {ProgressDialog} from 'react-native-simple-dialogs';
import RootSiblings from 'react-native-root-siblings';
import React, {Component} from 'react';
export default class DialogManager{
    static showProgressDialog(title,content){
        let root = new RootSiblings(<ProgressDialog
            visible={true}
            title={title}
            message={content}
        />)
        return root;
    }
}