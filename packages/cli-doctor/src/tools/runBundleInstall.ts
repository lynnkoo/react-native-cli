import execa from 'execa';
import {CLIError, logger} from '@react-native-community/cli-tools';

import {Loader} from '../types';

async function runBundleInstall(loader: Loader) {
  try {
    loader.start('Installing Bundler');

    await execa('bundle', ['install']);
  } catch (error) {
    loader.fail();
    logger.error((error as any).stderr || (error as any).stdout);
    throw new CLIError(
      'Looks like your iOS environment is not properly set. Please go to https://reactnative.dev/docs/next/environment-setup and follow the React Native CLI QuickStart guide for macOS and iOS.',
      error as Error,
    );
  }

  loader.succeed();
}

export default runBundleInstall;
