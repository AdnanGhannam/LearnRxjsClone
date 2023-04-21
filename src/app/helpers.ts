import { SnapshotAction } from "@angular/fire/compat/database";

export const getWithId = (change: SnapshotAction<any>) => {
    const res = change.payload.val();

    if (res) {
        return ({ id: change.payload.key, ...change.payload.val() })
    }

    return null;
}