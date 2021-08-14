
import 'reflect-metadata'
import { inject, injectable } from 'inversify-props'
import { Vue, Component } from 'vue-property-decorator'

@injectable()
export default class GraphqlChildService extends Vue {
}
