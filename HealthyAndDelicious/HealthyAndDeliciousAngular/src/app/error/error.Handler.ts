// error.Handler.ts

import { HttpErrorResponse } from '@angular/common/http';

export function handleError(error: HttpErrorResponse): string {
  let errorMessage = 'Unknown error occurred';
  if (error.error instanceof ErrorEvent) {
    // Client-side errors
    errorMessage = `Error: ${error.error.message}`;
  } else {
    // Server-side errors
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  return errorMessage;
}
