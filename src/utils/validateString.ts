export function validateString(str: string): boolean {
	const invalidChars = /[<>{}[\]\\\/&|;$%@!^*()+=]/;
	return str.trim().length > 0 && !invalidChars.test(str);
}