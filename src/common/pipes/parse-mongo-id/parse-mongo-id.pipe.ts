import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { isValidObjectId } from 'mongoose';

@Injectable()
export class ParseMongoIdPipe implements PipeTransform {
  
  transform(value: string, metadata: ArgumentMetadata) {
    if (!isValidObjectId(value)){
      throw new BadRequestException(`It is not a valid MongoId`)
    }
    return value
    // throw new Error('Method not implemented.');
  }

}
