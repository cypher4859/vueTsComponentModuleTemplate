
import 'reflect-metadata'
import { inject, injectable } from 'inversify-props'
import { Vue, Component } from 'vue-property-decorator'
import ComponentStore from '@/components/NewComponent/state-management/NewComponentStore'

const componentStore = getModule(ComponentStore)

@injectable()
export default class VuexChildService extends Vue {
}
