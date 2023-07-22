type FieldValidatorType = (value: string) => string | undefined

export const validation: FieldValidatorType = (value) => {
    if (value) return undefined;
    return "Field is required";
}
