import {Module} from "@nestjs/common";
import {NftsController} from "./nfts.controller";
import {NftsService} from "./nfts.service";
import {HttpModule} from "@nestjs/axios";

@Module({
    imports: [HttpModule],
    controllers: [NftsController],
    providers: [NftsService],
})
export class nftsModule {}
