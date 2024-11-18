import { saveAs } from 'file-saver';
// import { Response } from '@angular/http';
import { HttpClient, HttpResponse } from '@angular/common/http';



/**
 * Saves a file by opening file-save-as dialog in the browser
 * using file-save library.
 * @param blobContent file content as a Blob
 * @param fileName name file should be saved as
*/

export const saveFile = (blobContent: Blob, fileName: string) => {
  fileName = fileName.replace(/^"(.*)"$/, '$1');
  const blob = new Blob([blobContent], { type: 'application/octet-stream' });
  saveAs(blob, fileName);
};

/**
 * Derives file name from the http response
 * by looking inside content-disposition
 * @param res http Response
*/
export const getFileNameFromResponseContentDisposition = (res: HttpResponse<Blob>): string => {
  const contentDisposition = res.headers.get('content-disposition') || '';

  // const matches = /filename=([^;]+)/ig.exec(contentDisposition);
  const matches = /filename[^;=\n]*=((["']).*?\2|[^;\n])*/.exec(contentDisposition);
  return (matches && matches[1]) ? matches[1].replace(/['"]/g, '') : 'untitled';

  // const fileName = (matches[1] || 'untitled').trim();
  // return fileName;
};
