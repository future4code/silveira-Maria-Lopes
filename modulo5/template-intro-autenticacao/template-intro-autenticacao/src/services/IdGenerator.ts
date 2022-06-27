import { v4 } from 'uuid'

// função para gerar o id.

export function generateId(): string {
    return v4();
}

// em classe.
// export class IdGenerator {
//     generateId = () => {
//         return v4;
//     }
// }