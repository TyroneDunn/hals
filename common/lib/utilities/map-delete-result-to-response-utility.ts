import { CommandResult } from '../command-result/command-result.type';
import { Response } from '../app/response.type';
import { INTERNAL_SERVER_ERROR, NOT_FOUND, OK } from '../http/http-status-codes.constant';

export const mapDeleteResultToResponse = (result : CommandResult) : Response => ({
   status: result.success && result.affectedCount > 0
      ? OK
      : result.success && result.affectedCount === 0
         ? NOT_FOUND
         : INTERNAL_SERVER_ERROR,
   ...result.success && { count: result.affectedCount },
   ...(!result.success) && {
      error: 'Delete Error: An unexpected error occurred. Please try again' +
         ' or contact support for assistance.',
   },
});