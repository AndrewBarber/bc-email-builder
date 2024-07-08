import {runCommand} from '@oclif/test'
import {expect} from 'chai'

describe('publish', () => {
  it('runs publish cmd', async () => {
    const {stdout} = await runCommand('publish')
    expect(stdout).to.contain('hello world')
  })

  it('runs publish --name oclif', async () => {
    const {stdout} = await runCommand('publish --name oclif')
    expect(stdout).to.contain('hello oclif')
  })
})
