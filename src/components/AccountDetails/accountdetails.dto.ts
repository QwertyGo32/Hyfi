import { IsNotEmpty,IsEthereumAddress } from "class-validator";

export class HashValidationDto {

    @IsNotEmpty({
        message: 'username cannot be empty'
    })
    @IsEthereumAddress({
        message:"Must be etherium"
    })
    public etherium: string | null = null;

}