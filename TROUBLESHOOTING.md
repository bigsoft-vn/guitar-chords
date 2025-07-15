# Guitar Chords App - Troubleshooting Guide

## Browser Extension Errors

### Error: `Cannot read properties of null (reading 'type')`

**Cause**: This error comes from browser extensions (MetaMask, Binance, etc.), not from the Guitar Chords app.

**Solution**: The app automatically filters these errors. You can:

1. **Ignore the error** - It doesn't affect your app functionality
2. **Disable extensions** temporarily for testing
3. **Use incognito mode** to test without extensions

### Common Extension Error Patterns
```
chrome-extension://egjidjbpglichdcondbcbdnbeeppgdph/inpage.js
moz-extension://...
ContentScript errors
```

## Port Already in Use Error

### Error: `EADDRINUSE: address already in use :::3001`

**Solutions**:

1. **Kill the process**:
```bash
kill -9 $(lsof -ti:3001)
```

2. **Use different port**:
```bash
PORT=3002 npm run dev:backend
```

3. **Kill all Node processes**:
```bash
pkill -f node
```

## Common Development Issues

### Frontend Build Errors

1. **Type errors**: Check TypeScript interfaces match API responses
2. **Import errors**: Verify all imports are correct
3. **Dependency errors**: Run `npm install` in the web folder

### Backend Errors

1. **Database connection**: Ensure SQLite database exists
2. **Port conflicts**: Use different ports or kill existing processes
3. **Dependency errors**: Run `npm install` in the backend folder

## Quick Commands

### Kill Specific Port
```bash
# Kill process on port 3001
kill -9 $(lsof -ti:3001)

# Kill process on port 3000
kill -9 $(lsof -ti:3000)
```

### Clean Install
```bash
# Clean frontend
cd web
rm -rf node_modules package-lock.json
npm install

# Clean backend
cd ../backend
rm -rf node_modules package-lock.json
npm install
```

### Debug Mode
```bash
# Run with debug info
DEBUG=* npm run dev:backend

# Check what's running on ports
lsof -i :3000,3001,3002
```

## Browser Compatibility

### Recommended Browsers
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

### Extension Conflicts
- MetaMask, Binance, crypto wallets
- Ad blockers (usually OK)
- Developer tools extensions

## Getting Help

1. **Check console errors** - Most real errors show in browser console
2. **Test in incognito mode** - Eliminates extension conflicts
3. **Check network tab** - Verify API calls are working
4. **Restart development server** - Fixes most caching issues

## Performance Tips

1. **Use unified mode** - `npm run dev:unified` for production-like setup
2. **Disable unnecessary extensions** while developing
3. **Clear browser cache** if seeing old versions
4. **Use Chrome DevTools** React extension for debugging