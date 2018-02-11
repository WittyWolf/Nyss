import { StaffUser } from './staffUser';
import { Location } from './location';

export class DataConsumer extends StaffUser {
    location: Location;

    constructor(params) {
        super(params);
        this.location = params.location;
    }
}