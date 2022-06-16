export class GetNftsDto {

   public collection: {
       collection_verified: number;
        key: string;
    };
    public data: {
        creators: [string];
        name: string;
        seller_fee_basis_points: number;
        share: [number];
        symbol: string;
        uri: string;
        verified: [number];
    };
    public edition_nonce: number;
    public explorer_url: string;
    public is_mutable: boolean;
    public metadata_account: string;
    public mint: string;
    public off_chain_data: {
        attributes: [{
            trait_type: string;
            value: string;
        }]
    };
    public primary_sale_happened: boolean;
    public token_standard: number;
    public update_authority: string;
    public uses: number;
}
