import { jsTPS_Transaction } from '../../jstps/index.js'
import PlaylisterModel from '../PlaylisterModel.js';

/**
 * EditSong_Transaction
 * 
 * This class represents a transaction that edits a song
 * in the playlist. It will be managed by the transaction stack.
 * 
 * 
 */
export default class EditSong_Transaction extends jsTPS_Transaction {
    /**
     * Initializes this object such that it can both do and undo the transaction
     * 
     * @param {PlaylisterModel} initModel The M in MVC for this app
     * @param {number} initOldTitle The index of where the song is to be created in the playlist
     * @param {number} initOldArtist The index of where the song is to be created in the playlist
     * @param {String} initOldYtId The created song.
     * @param {number} initNewTitle The index of where the song is to be created in the playlist
     * @param {number} initNewArtist The index of where the song is to be created in the playlist
     * @param {String} initNewYtId The created song.
     */
    constructor(initModel, initIndex, initOldSongArray, initNewSongArray) {
        super();
        this.model = initModel;
        this.index = initIndex;
        this.oldSongArray = initOldSongArray;
        this.newSongArray = initNewSongArray;
    }

    /**
     * Executed when this transaction is first done or redone.
     */
    doTransaction() {
        this.model.editSong(this.index, this.newSongArray);
    }

    /**
     * Executed when this transaction is undone.
     */
    undoTransaction() {
        this.model.editSong(this.index, this.oldSongArray);
    }
}