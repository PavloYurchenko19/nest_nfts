import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map, Observable } from 'rxjs';
import { changeResponse } from '../utils/nft_utils/correctResponse';

@Injectable()
export class NftsService {
  constructor(private httpService: HttpService) {}

  private network = 'mainnet-beta';

  // Key Id: HH3ia46acAFgaiB
  // Secret Key: Ct2u1Q0Vy23ilvT
  getNfts(
    token: string,
    name: string,
    sort: string,
    page: number,
  ): Observable<{ data: any[]; statusCode: number }> {
    const header = {
      APIKeyID: 'HH3ia46acAFgaiB',
      APISecretKey: 'Ct2u1Q0Vy23ilvT',
    };
    return this.httpService
      .get(
        `https://api.blockchainapi.com/v1/solana/wallet/${this.network}/${token}/nfts`,
        {
          headers: header,
        },
      )
      .pipe(
        map((response) =>
          changeResponse(response.data.nfts_metadata, token, name, sort, page),
        ),
      );
  }
}
