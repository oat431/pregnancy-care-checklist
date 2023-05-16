import { google } from 'googleapis';

const sheet = google.sheets({
    version: 'v4',
    auth: "AIzaSyApZSspFL7TjLomw81rS00gTgYm3_HCFHE"
}) 

export default {
    addData(data: Object){
        sheet.spreadsheets.values.append({

        })
    }
};
