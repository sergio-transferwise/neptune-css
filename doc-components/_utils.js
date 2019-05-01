import getConfig from 'next/config'

export const config = getConfig().publicRuntimeConfig || {}

export const assetPrefix = config.assetPrefix || ''
export const assetPath = `${assetPrefix}/static/assets/`
export const getAssetPath = path => `${assetPath}${path}`
