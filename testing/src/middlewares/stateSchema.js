export default {
	$id: 'http://example.com/example.json',
	type: 'object',
	definitions: {},
	$schema: 'http://json-schema.org/draft-07/schema#',
	properties: {
		comment: {
			$id: '/properties/comment',
			type: 'array',
			items: {
				$id: '/properties/comment/items',
				type: 'string',
				title: 'The 0th Schema ',
				default: '',
				examples: ['comment1', 'comment2']
			}
		},
		auth: {
			$id: '/properties/auth',
			type: 'boolean',
			title: 'The Auth Schema ',
			default: false,
			examples: [true]
		}
	}
};
