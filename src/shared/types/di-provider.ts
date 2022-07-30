interface DependencyInjectionProvider {
  register(): Promise<void> | void;
}

export default DependencyInjectionProvider;
