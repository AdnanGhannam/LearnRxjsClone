export type Direction = 
    "TopLeft" 
    | "TopCenter"
    | "TopRight"
    | "BottomLeft"
    | "BottomCenter"
    | "BottomRight"
    | "CenterLeft"
    | "CenterCenter"
    | "CenterRight";

export type TreeViewNode = {
    id?: NullableString;
    text: string;
    children?: Array<TreeViewNode>;
    isOpened?: boolean;
    contentId?: string;
};

export type OnTreeViewNodeClickParams = {
    id: string;
    value: string;
}

export type Topic = {
    id?: string;
    order: number;
    title: string;
    content: string;
}

export type NullableString = string | null | undefined;
