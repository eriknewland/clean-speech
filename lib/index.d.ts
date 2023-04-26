interface CensorInputConfig {
    textareaSelector: string;
    censoredWords?: string[];
    toastMessage?: string;
    toastStyle?: Partial<CSSStyleDeclaration>;
    toastDuration?: number;
    fadeDuration?: number;
}
declare function censorInput(config: CensorInputConfig): void;
export default censorInput;
